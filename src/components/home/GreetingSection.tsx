import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Crown } from 'lucide-react-native';
import { Colors, Spacing, BorderRadius } from '@/constants/theme';

interface GreetingSectionProps {
  userName?: string;
  isPro?: boolean;
  onProPress?: () => void;
}

export const GreetingSection: React.FC<GreetingSectionProps> = ({
  userName = 'Ana',
  onProPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greetingTitle}>Olá, {userName}! 👋</Text>
        <Text style={styles.greetingSubtitle}>
          Descubra os melhores pratos da sua região.
        </Text>
      </View>

      <Pressable
        onPress={onProPress}
        style={({ pressed }) => [
          styles.proBadge,
          pressed && styles.proBadgePressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Assinatura GastroPulse PRO"
      >
        <Crown size={15} color={Colors.proGold} strokeWidth={2.4} fill={Colors.proGold} />
        <Text style={styles.proText}>PRO</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
  },
  textContainer: {
    flex: 1,
    marginRight: Spacing.md,
  },
  greetingTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '400',
    lineHeight: 18,
  },
  proBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.proGoldLight,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: '#F3DB9E',
    gap: 4,
  },
  proBadgePressed: {
    opacity: 0.8,
  },
  proText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#9C6E00',
    letterSpacing: 0.5,
  },
});
