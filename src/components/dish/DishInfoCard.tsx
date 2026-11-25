import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Clock, Heart, Share2 } from 'lucide-react-native';
import { Colors, Spacing, BorderRadius } from '@/constants/theme';
import { Dish } from '@/types/dish';

interface DishInfoCardProps {
  dish: Dish;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onShare: () => void;
}

export const DishInfoCard: React.FC<DishInfoCardProps> = ({
  dish,
  isFavorite,
  onToggleFavorite,
  onShare,
}) => {
  return (
    <View style={styles.container}>
      {/* Title & Restaurant */}
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.subtitle}>
        {dish.restaurant} • {dish.distance}
      </Text>

      {/* Price & Prep Time Row */}
      <View style={styles.metaRow}>
        <Text style={styles.price}>
          R$ {dish.price.toFixed(2).replace('.', ',')}
        </Text>

        <View style={styles.timeBadge}>
          <Clock size={16} color={Colors.textSecondary} strokeWidth={2.2} />
          <Text style={styles.timeText}>{dish.prepTime}</Text>
        </View>
      </View>

      {/* Action Buttons: Favoritar & Compartilhar */}
      <View style={styles.actionButtonsRow}>
        <Pressable
          onPress={onToggleFavorite}
          style={({ pressed }) => [
            styles.actionButton,
            isFavorite && styles.actionButtonActive,
            pressed && styles.actionButtonPressed,
          ]}
          accessibilityRole="button"
        >
          <Heart
            size={16}
            color={isFavorite ? Colors.primary : Colors.text}
            fill={isFavorite ? Colors.primary : 'transparent'}
            strokeWidth={2}
          />
          <Text
            style={[
              styles.actionButtonText,
              isFavorite && styles.actionButtonTextActive,
            ]}
          >
            {isFavorite ? 'Favoritado' : 'Favoritar'}
          </Text>
        </Pressable>

        <Pressable
          onPress={onShare}
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.actionButtonPressed,
          ]}
          accessibilityRole="button"
        >
          <Share2 size={16} color={Colors.text} strokeWidth={2} />
          <Text style={styles.actionButtonText}>Compartilhar</Text>
        </Pressable>
      </View>

      {dish.description && (
        <Text style={styles.description}>{dish.description}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    marginTop: -20,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.md,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.4,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  price: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.primary,
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  timeText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  actionButtonsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  actionButtonActive: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  actionButtonPressed: {
    opacity: 0.75,
  },
  actionButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.text,
  },
  actionButtonTextActive: {
    color: Colors.primary,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
  },
});
