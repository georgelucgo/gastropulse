import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ticket, Info } from 'lucide-react-native';
import { Colors, Spacing, BorderRadius } from '@/constants/theme';

interface DailyCouponBannerProps {
  usedCoupons?: number;
  totalCoupons?: number;
  onInfoPress?: () => void;
}

export const DailyCouponBanner: React.FC<DailyCouponBannerProps> = ({
  usedCoupons = 1,
  totalCoupons = 2,
  onInfoPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentRow}>
        <View style={styles.iconWrapper}>
          <Ticket size={17} color={Colors.primary} strokeWidth={2.2} />
        </View>
        <Text style={styles.bannerText}>
          Cupons de hoje:{' '}
          <Text style={styles.boldText}>
            {usedCoupons}/{totalCoupons}
          </Text>
        </Text>
      </View>

      <Pressable
        onPress={onInfoPress}
        style={({ pressed }) => [
          styles.infoButton,
          pressed && styles.infoButtonPressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Informações sobre limite diário de cupons"
      >
        <Info size={16} color={Colors.textMuted} strokeWidth={2} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Spacing.xl,
    marginTop: Spacing.xs,
    marginBottom: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 13,
    color: Colors.text,
    fontWeight: '500',
  },
  boldText: {
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  infoButton: {
    padding: 4,
  },
  infoButtonPressed: {
    opacity: 0.6,
  },
});
