import React from 'react';
import { View, StyleSheet, Pressable, Platform } from 'react-native';
import { ArrowLeft, Heart, Share2 } from 'lucide-react-native';
import { Colors } from '@/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface DishHeaderProps {
  isFavorite: boolean;
  onBack: () => void;
  onToggleFavorite: () => void;
  onShare: () => void;
}

export const DishHeader: React.FC<DishHeaderProps> = ({
  isFavorite,
  onBack,
  onToggleFavorite,
  onShare,
}) => {
  const insets = useSafeAreaInsets();
  const topPadding = Platform.OS === 'ios' ? insets.top : insets.top + 8;

  return (
    <View style={[styles.container, { paddingTop: topPadding }]}>
      <Pressable
        onPress={onBack}
        style={({ pressed }) => [
          styles.actionButton,
          pressed && styles.actionButtonPressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Voltar para a tela anterior"
      >
        <ArrowLeft size={22} color={Colors.text} strokeWidth={2.4} />
      </Pressable>

      <View style={styles.rightActions}>
        <Pressable
          onPress={onToggleFavorite}
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.actionButtonPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel={isFavorite ? "Remover dos favoritos" : "Salvar nos favoritos"}
        >
          <Heart
            size={20}
            color={isFavorite ? Colors.primary : Colors.text}
            fill={isFavorite ? Colors.primary : 'transparent'}
            strokeWidth={2.2}
          />
        </Pressable>

        <Pressable
          onPress={onShare}
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.actionButtonPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Compartilhar prato"
        >
          <Share2 size={20} color={Colors.text} strokeWidth={2.2} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionButtonPressed: {
    opacity: 0.75,
    backgroundColor: Colors.surfaceAlt,
  },
});
