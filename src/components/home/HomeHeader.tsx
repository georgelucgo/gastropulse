import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ChefHat, Bell } from 'lucide-react-native';
import { Colors, Spacing } from '@/constants/theme';

interface HomeHeaderProps {
  unreadNotifications?: boolean;
  onNotificationPress?: () => void;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  unreadNotifications = true,
  onNotificationPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.brandRow}>
        <View style={styles.logoIconContainer}>
          <ChefHat size={30} color={Colors.primary} strokeWidth={2.4} />
        </View>
        <Text style={styles.brandText}>
          Gastro<Text style={styles.brandAccent}>Pulse</Text>
        </Text>
      </View>

      <Pressable
        onPress={onNotificationPress}
        style={({ pressed }) => [
          styles.iconButton,
          pressed && styles.iconButtonPressed,
        ]}
        accessibilityRole="button"
        accessibilityLabel="Notificações"
      >
        <Bell size={22} color={Colors.text} strokeWidth={2} />
        {unreadNotifications && <View style={styles.badgeDot} />}
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
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
    backgroundColor: Colors.background,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  logoIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
    letterSpacing: -0.5,
  },
  brandAccent: {
    color: Colors.primaryDark,
    fontWeight: '800',
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonPressed: {
    opacity: 0.7,
    backgroundColor: Colors.surfaceAlt,
  },
  badgeDot: {
    position: 'absolute',
    top: 10,
    right: 11,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
});
