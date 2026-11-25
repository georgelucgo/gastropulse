import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Share,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/theme';
import { MOCK_DISHES } from '@/data/mockDishes';
import { DishHeader } from '@/components/dish/DishHeader';
import { DishImageCarousel } from '@/components/dish/DishImageCarousel';
import { DishInfoCard } from '@/components/dish/DishInfoCard';
import { NutritionalLockSection } from '@/components/dish/NutritionalLockSection';
import { ProSubscriptionModal } from '@/components/dish/ProSubscriptionModal';

export default function DishDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  // Find dish or fallback to the first
  const dish = MOCK_DISHES.find((d) => d.id === id) || MOCK_DISHES[0];

  const [isFavorite, setIsFavorite] = useState(dish.isFavorite ?? false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const carouselImages =
    dish.gallery && dish.gallery.length > 0 ? dish.gallery : [dish.image];

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Confira este prato incrível no GastroPulse: ${dish.name} do ${dish.restaurant} por apenas R$ ${dish.price.toFixed(2).replace('.', ',')}!`,
      });
    } catch {
      Alert.alert('Compartilhar', 'Não foi possível abrir o menu de compartilhamento.');
    }
  };

  const handleActivatePro = () => {
    setIsUnlocked(true);
    setModalVisible(false);
    Alert.alert(
      'GastroPulse Pass Ativado! 🎉',
      'Informações nutricionais e alérgenos desbloqueados com sucesso para este prato.'
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Floating Top Navigation Header */}
      <DishHeader
        isFavorite={isFavorite}
        onBack={() => router.back()}
        onToggleFavorite={() => setIsFavorite(!isFavorite)}
        onShare={handleShare}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Hero Photo Carousel with Pagination Dots */}
        <DishImageCarousel images={carouselImages} />

        {/* Dish Info Card (Title, Subtitle, Price, Time, Action Buttons) */}
        <DishInfoCard
          dish={dish}
          isFavorite={isFavorite}
          onToggleFavorite={() => setIsFavorite(!isFavorite)}
          onShare={handleShare}
        />

        {/* Nutritional & Allergens Section with PRO Lock */}
        <NutritionalLockSection
          info={dish.nutritionalInfo}
          isUnlocked={isUnlocked}
          onUnlockPress={() => setModalVisible(true)}
        />
      </ScrollView>

      {/* GastroPulse Pass Subscription / Unlock Modal */}
      <ProSubscriptionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onActivateDemo={handleActivatePro}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
