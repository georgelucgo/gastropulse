import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing } from '@/constants/theme';
import { HomeHeader } from '@/components/home/HomeHeader';
import { GreetingSection } from '@/components/home/GreetingSection';
import { SearchBar } from '@/components/home/SearchBar';
import { CategoryChips } from '@/components/home/CategoryChips';
import { FeaturedDishCard } from '@/components/home/FeaturedDishCard';
import { DailyCouponBanner } from '@/components/home/DailyCouponBanner';
import { CATEGORIES, MOCK_DISHES } from '@/data/mockDishes';
import { Dish } from '@/types/dish';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - Spacing.xl * 2;

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('near_you');
  const [dishes, setDishes] = useState<Dish[]>(MOCK_DISHES);
  const [activeSlide, setActiveSlide] = useState(0);
  const [usedCoupons, setUsedCoupons] = useState(1);
  const totalCoupons = 2;

  // Filter dishes by search and category
  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch =
      dish.name.toLowerCase().includes(searchText.toLowerCase()) ||
      dish.restaurant.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory =
      selectedCategory === 'near_you' || dish.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(
      event.nativeEvent.contentOffset.x / (CARD_WIDTH + Spacing.md)
    );
    if (slide >= 0 && slide < filteredDishes.length) {
      setActiveSlide(slide);
    }
  };

  const handleRedeemCoupon = (dish: Dish) => {
    if (usedCoupons >= totalCoupons) {
      Alert.alert(
        'Limite Diário Atingido',
        'Você já resgatou todos os cupons disponíveis para hoje no plano gratuito. Assine o GastroPulse PRO para cupons ilimitados!'
      );
      return;
    }

    setUsedCoupons((prev) => Math.min(prev + 1, totalCoupons));
    Alert.alert(
      'Cupom Resgatado! 🎉',
      `Seu cupom de desconto para ${dish.name} no ${dish.restaurant} foi ativado com sucesso!`
    );
  };

  const handleToggleFavorite = (updatedDish: Dish) => {
    setDishes((prev) =>
      prev.map((d) => (d.id === updatedDish.id ? updatedDish : d))
    );
  };

  const handleProPress = () => {
    Alert.alert(
      'GastroPulse PRO 👑',
      'Com o GastroPulse Pass, você tem cupons ilimitados, entrega prioritária e acesso a informações nutricionais completas!'
    );
  };

  const handleCouponInfoPress = () => {
    Alert.alert(
      'Cupons Diários',
      `Você utilizou ${usedCoupons} de ${totalCoupons} cupons disponíveis hoje. O limite é renovado diariamente à meia-noite.`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header */}
        <HomeHeader
          unreadNotifications={true}
          onNotificationPress={() =>
            Alert.alert('Notificações', 'Você não possui novas notificações no momento.')
          }
        />

        {/* Greeting & PRO Badge */}
        <GreetingSection
          userName="Ana"
          isPro={false}
          onProPress={handleProPress}
        />

        {/* Search Bar & Filters */}
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          onFilterPress={() =>
            Alert.alert('Filtros', 'Filtro por raio de distância e faixa de preço.')
          }
        />

        {/* Categories Horizontal Chips */}
        <CategoryChips
          categories={CATEGORIES}
          selectedCategoryId={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Featured Dish Carousel */}
        <View style={styles.carouselSection}>
          <ScrollView
            horizontal
            pagingEnabled={false}
            snapToInterval={CARD_WIDTH + Spacing.md}
            snapToAlignment="start"
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {filteredDishes.map((dish) => (
              <View key={dish.id} style={{ width: CARD_WIDTH }}>
                <FeaturedDishCard
                  dish={dish}
                  onRedeemCoupon={handleRedeemCoupon}
                  onToggleFavorite={handleToggleFavorite}
                  onPress={() => {
                    Alert.alert(
                      dish.name,
                      `${dish.description}\n\nPreço: R$ ${dish.price
                        .toFixed(2)
                        .replace('.', ',')}`
                    );
                  }}
                />
              </View>
            ))}
          </ScrollView>

          {/* Carousel Pagination Dots */}
          {filteredDishes.length > 1 && (
            <View style={styles.paginationDots}>
              {filteredDishes.map((_, index) => {
                const isActive = index === activeSlide;
                return (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      isActive ? styles.dotActive : styles.dotInactive,
                    ]}
                  />
                );
              })}
            </View>
          )}
        </View>

        {/* Daily Coupon Indicator Banner */}
        <DailyCouponBanner
          usedCoupons={usedCoupons}
          totalCoupons={totalCoupons}
          onInfoPress={handleCouponInfoPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainer: {
    paddingBottom: Spacing.xl,
  },
  carouselSection: {
    marginTop: Spacing.xs,
  },
  carouselContainer: {
    paddingLeft: 0,
    gap: Spacing.md,
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
    marginBottom: Spacing.md,
  },
  dot: {
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    width: 18,
    backgroundColor: Colors.primary,
  },
  dotInactive: {
    width: 6,
    backgroundColor: '#DECBC6',
  },
});
