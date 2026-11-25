import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Lock, Crown, CheckCircle2 } from 'lucide-react-native';
import { Colors, Spacing, BorderRadius } from '@/constants/theme';
import { NutritionalInfo } from '@/types/dish';

interface NutritionalLockSectionProps {
  info?: NutritionalInfo;
  isUnlocked: boolean;
  onUnlockPress: () => void;
}

export const NutritionalLockSection: React.FC<NutritionalLockSectionProps> = ({
  info,
  isUnlocked,
  onUnlockPress,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Informações nutricionais e alérgenos</Text>

      <View style={styles.contentBox}>
        {isUnlocked && info ? (
          /* Unlocked Table */
          <View style={styles.unlockedContainer}>
            <View style={styles.unlockedBadge}>
              <CheckCircle2 size={14} color={Colors.success} strokeWidth={2.4} />
              <Text style={styles.unlockedBadgeText}>Desbloqueado com GastroPulse Pass</Text>
            </View>

            <View style={styles.nutritionGrid}>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Valor energético</Text>
                <Text style={styles.gridValue}>{info.calories}</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Carboidratos</Text>
                <Text style={styles.gridValue}>{info.carbs}</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Proteínas</Text>
                <Text style={styles.gridValue}>{info.protein}</Text>
              </View>
              <View style={styles.gridItem}>
                <Text style={styles.gridLabel}>Gorduras totais</Text>
                <Text style={styles.gridValue}>{info.fat}</Text>
              </View>
            </View>

            {info.allergens.length > 0 && (
              <View style={styles.allergensContainer}>
                <Text style={styles.allergensTitle}>Alérgenos:</Text>
                <View style={styles.allergenTags}>
                  {info.allergens.map((item, idx) => (
                    <View key={idx} style={styles.allergenTag}>
                      <Text style={styles.allergenTagText}>{item}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        ) : (
          /* Locked State with blurred aesthetic and Padlock */
          <View style={styles.lockedContainer}>
            {/* Blurred Rows Simulation */}
            <View style={styles.blurredRows}>
              <View style={styles.dummyRow}>
                <View style={[styles.dummyLine, { width: 110 }]} />
                <View style={[styles.dummyLine, { width: 45 }]} />
              </View>
              <View style={styles.dummyRow}>
                <View style={[styles.dummyLine, { width: 95 }]} />
                <View style={[styles.dummyLine, { width: 35 }]} />
              </View>
              <View style={styles.dummyRow}>
                <View style={[styles.dummyLine, { width: 80 }]} />
                <View style={[styles.dummyLine, { width: 40 }]} />
              </View>
              <View style={styles.dummyRow}>
                <View style={[styles.dummyLine, { width: 105 }]} />
                <View style={[styles.dummyLine, { width: 38 }]} />
              </View>
            </View>

            {/* Lock Overlay Content */}
            <View style={styles.lockOverlay}>
              <View style={styles.lockIconContainer}>
                <Lock size={26} color="#381D14" strokeWidth={2.4} />
              </View>
              <Text style={styles.lockTitle}>Conteúdo exclusivo do</Text>
              <Text style={styles.lockBrand}>GastroPulse Pass</Text>
            </View>
          </View>
        )}
      </View>

      {/* CTA Button: Desbloquear com GastroPulse Pass */}
      {!isUnlocked && (
        <Pressable
          onPress={onUnlockPress}
          style={({ pressed }) => [
            styles.ctaButton,
            pressed && styles.ctaButtonPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Desbloquear informações com GastroPulse Pass"
        >
          <Crown size={18} color="#FFFFFF" strokeWidth={2.2} fill="#FFFFFF" />
          <Text style={styles.ctaButtonText}>
            Desbloquear com GastroPulse Pass
          </Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xxl,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  contentBox: {
    backgroundColor: '#F8F1EB',
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EDE0D4',
    minHeight: 140,
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  lockedContainer: {
    padding: Spacing.lg,
    position: 'relative',
    minHeight: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurredRows: {
    width: '100%',
    gap: 12,
    opacity: 0.18,
  },
  dummyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dummyLine: {
    height: 10,
    backgroundColor: '#381D14',
    borderRadius: 5,
  },
  lockOverlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(248, 241, 235, 0.72)',
    padding: Spacing.md,
  },
  lockIconContainer: {
    marginBottom: 6,
  },
  lockTitle: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  lockBrand: {
    fontSize: 14,
    fontWeight: '800',
    color: Colors.text,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: BorderRadius.md,
    gap: 8,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 3,
  },
  ctaButtonPressed: {
    opacity: 0.85,
  },
  ctaButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  unlockedContainer: {
    padding: Spacing.lg,
  },
  unlockedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: Spacing.md,
  },
  unlockedBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.success,
  },
  nutritionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: Spacing.md,
  },
  gridItem: {
    width: '47%',
    backgroundColor: Colors.surface,
    padding: 10,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  gridLabel: {
    fontSize: 11,
    color: Colors.textSecondary,
    marginBottom: 2,
  },
  gridValue: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.text,
  },
  allergensContainer: {
    marginTop: 4,
  },
  allergensTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  allergenTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  allergenTag: {
    backgroundColor: '#FDECEA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
  },
  allergenTagText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#C62828',
  },
});
