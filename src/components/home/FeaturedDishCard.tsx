import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Heart, Clock, Ticket, Flame } from 'lucide-react-native';
import { Colors, Spacing, BorderRadius } from '@/constants/theme';
import { Dish } from '@/types/dish';

interface FeaturedDishCardProps {
  dish: Dish;
  onPress?: () => void;
  onRedeemCoupon?: (dish: Dish) => void;
  onToggleFavorite?: (dish: Dish) => void;
}

export const FeaturedDishCard: React.FC<FeaturedDishCardProps> = ({
  dish,
  onPress,
  onRedeemCoupon,
  onToggleFavorite,
}) => {
  const [isFav, setIsFav] = useState(dish.isFavorite ?? false);
  const [redeemed, setRedeemed] = useState(false);

  const handleFavorite = (e: any) => {
    e?.stopPropagation?.();
    const nextState = !isFav;
    setIsFav(nextState);
    onToggleFavorite?.({ ...dish, isFavorite: nextState });
  };

  const handleRedeem = (e: any) => {
    e?.stopPropagation?.();
    setRedeemed(true);
    onRedeemCoupon?.(dish);
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Prato em destaque: ${dish.name}, preço R$ ${dish.price.toFixed(2).replace('.', ',')}`}
    >
      {/* Top Banner Tag */}
      {dish.tag && (
        <View style={styles.tagBadge}>
          <Flame size={13} color={Colors.primary} strokeWidth={2.4} />
          <Text style={styles.tagText}>{dish.tag}</Text>
        </View>
      )}

      {/* Favorite Button */}
      <Pressable
        onPress={handleFavorite}
        style={({ pressed }) => [
          styles.favoriteButton,
          pressed && styles.favoriteButtonPressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      >
        <Heart
          size={18}
          color={isFav ? Colors.primary : Colors.textSecondary}
          fill={isFav ? Colors.primary : 'transparent'}
          strokeWidth={2}
        />
      </Pressable>

      {/* Dish Image */}
      <View style={styles.imageContainer}>
        <Image
          source={dish.image}
          style={styles.image}
          contentFit="cover"
          transition={300}
        />
      </View>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.dishName} numberOfLines={1}>
          {dish.name}
        </Text>
        <Text style={styles.restaurantInfo} numberOfLines={1}>
          {dish.restaurant} • {dish.distance}
        </Text>

        {/* Prep Time & Price Row */}
        <View style={styles.metaRow}>
          <View style={styles.timeBadge}>
            <Clock size={13} color={Colors.textSecondary} strokeWidth={2} />
            <Text style={styles.timeText}>{dish.prepTime}</Text>
          </View>

          <Text style={styles.priceText}>
            R$ {dish.price.toFixed(2).replace('.', ',')}
          </Text>
        </View>

        {/* Action Button: Resgatar cupom */}
        <Pressable
          onPress={handleRedeem}
          style={({ pressed }) => [
            styles.redeemButton,
            redeemed && styles.redeemedButton,
            pressed && styles.redeemButtonPressed,
          ]}
          disabled={redeemed}
          accessibilityRole="button"
          accessibilityLabel={redeemed ? "Cupom resgatado com sucesso" : "Resgatar cupom deste prato"}
        >
          <Ticket size={16} color={Colors.textInverse} strokeWidth={2.2} />
          <Text style={styles.redeemText}>
            {redeemed ? 'Cupom resgatado!' : 'Resgatar cupom'}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
    position: 'relative',
    marginHorizontal: Spacing.xl,
    marginBottom: Spacing.md,
  },
  cardPressed: {
    opacity: 0.96,
  },
  tagBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    gap: 4,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.text,
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderWidth: 1,
    borderColor: Colors.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButtonPressed: {
    opacity: 0.7,
  },
  imageContainer: {
    width: '100%',
    height: 190,
    backgroundColor: Colors.surfaceAlt,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: Spacing.lg,
  },
  dishName: {
    fontSize: 17,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  restaurantInfo: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  timeText: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  priceText: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primary,
  },
  redeemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: BorderRadius.md,
    gap: 8,
  },
  redeemedButton: {
    backgroundColor: Colors.success,
  },
  redeemButtonPressed: {
    opacity: 0.85,
  },
  redeemText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textInverse,
  },
});
