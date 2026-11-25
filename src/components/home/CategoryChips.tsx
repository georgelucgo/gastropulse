import React from 'react';
import { ScrollView, Text, StyleSheet, Pressable } from 'react-native';
import { MapPin } from 'lucide-react-native';
import { Colors, Spacing, BorderRadius } from '@/constants/theme';
import { Category } from '@/types/dish';

interface CategoryChipsProps {
  categories: Category[];
  selectedCategoryId: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryChips: React.FC<CategoryChipsProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((cat) => {
        const isSelected = cat.id === selectedCategoryId;
        const isNearYou = cat.id === 'near_you';

        return (
          <Pressable
            key={cat.id}
            onPress={() => onSelectCategory(cat.id)}
            style={({ pressed }) => [
              styles.chip,
              isSelected ? styles.chipSelected : styles.chipUnselected,
              pressed && styles.chipPressed,
            ]}
            accessibilityRole="button"
            accessibilityState={{ selected: isSelected }}
          >
            {isNearYou && (
              <MapPin
                size={14}
                color={isSelected ? Colors.textInverse : Colors.primary}
                strokeWidth={2.4}
                style={styles.chipIcon}
              />
            )}
            <Text
              style={[
                styles.chipText,
                isSelected ? styles.chipTextSelected : styles.chipTextUnselected,
              ]}
            >
              {cat.name}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.md,
    gap: Spacing.sm,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 9,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
  },
  chipSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  chipUnselected: {
    backgroundColor: Colors.surface,
    borderColor: Colors.border,
  },
  chipPressed: {
    opacity: 0.8,
  },
  chipIcon: {
    marginRight: 4,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
  },
  chipTextSelected: {
    color: Colors.textInverse,
  },
  chipTextUnselected: {
    color: Colors.textSecondary,
  },
});
