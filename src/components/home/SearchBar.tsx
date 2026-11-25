import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { Search, SlidersHorizontal } from 'lucide-react-native';
import { Colors, Spacing, BorderRadius } from '@/constants/theme';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress?: () => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  onFilterPress,
  placeholder = 'O que vamos comer?',
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Search size={18} color={Colors.textMuted} strokeWidth={2} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={Colors.textMuted}
          value={value}
          onChangeText={onChangeText}
          returnKeyType="search"
          accessibilityLabel="Campo de busca de pratos e restaurantes"
        />
      </View>

      <Pressable
        onPress={onFilterPress}
        style={({ pressed }) => [
          styles.filterButton,
          pressed && styles.filterButtonPressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Filtros de busca"
      >
        <SlidersHorizontal size={18} color={Colors.text} strokeWidth={2} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.md,
    gap: Spacing.sm,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    height: 46,
  },
  searchIcon: {
    marginRight: Spacing.xs,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: Colors.text,
    height: '100%',
    paddingVertical: 0,
  },
  filterButton: {
    width: 46,
    height: 46,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonPressed: {
    opacity: 0.7,
    backgroundColor: Colors.surfaceAlt,
  },
});
