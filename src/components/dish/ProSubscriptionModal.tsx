import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import { Crown, Check, X } from 'lucide-react-native';
import { Colors, Spacing, BorderRadius } from '@/constants/theme';

interface ProSubscriptionModalProps {
  visible: boolean;
  onClose: () => void;
  onActivateDemo: () => void;
}

export const ProSubscriptionModal: React.FC<ProSubscriptionModalProps> = ({
  visible,
  onClose,
  onActivateDemo,
}) => {
  const benefits = [
    'Cupons de desconto ilimitados todos os dias',
    'Tabelas nutricionais e lista de alérgenos completas',
    'Prioridade na fila de pedidos dos restaurantes',
    'Frete grátis em pratos selecionados',
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.sheetContainer}>
              {/* Close Button */}
              <Pressable
                onPress={onClose}
                style={styles.closeButton}
                accessibilityRole="button"
                accessibilityLabel="Fechar modal"
              >
                <X size={20} color={Colors.textSecondary} strokeWidth={2} />
              </Pressable>

              {/* Header Icon */}
              <View style={styles.crownContainer}>
                <Crown size={32} color={Colors.proGold} strokeWidth={2.2} fill={Colors.proGold} />
              </View>

              <Text style={styles.title}>GastroPulse Pass</Text>
              <Text style={styles.subtitle}>
                A experiência gastronômica completa para você descobrir o melhor da sua cidade.
              </Text>

              {/* Benefits list */}
              <View style={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <View key={index} style={styles.benefitRow}>
                    <View style={styles.checkCircle}>
                      <Check size={13} color="#FFFFFF" strokeWidth={3} />
                    </View>
                    <Text style={styles.benefitText}>{benefit}</Text>
                  </View>
                ))}
              </View>

              {/* Price Banner */}
              <View style={styles.priceContainer}>
                <Text style={styles.pricePeriod}>Apenas</Text>
                <Text style={styles.priceValue}>R$ 9,90</Text>
                <Text style={styles.pricePeriod}>/ mês</Text>
              </View>

              {/* Action: Activate Simulation */}
              <Pressable
                onPress={onActivateDemo}
                style={({ pressed }) => [
                  styles.activateButton,
                  pressed && styles.activateButtonPressed,
                ]}
                accessibilityRole="button"
              >
                <Crown size={18} color="#FFFFFF" strokeWidth={2.4} fill="#FFFFFF" />
                <Text style={styles.activateButtonText}>
                  Ativar Demonstração PRO
                </Text>
              </Pressable>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    padding: Spacing.xl,
    paddingBottom: Spacing.xxxl,
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 18,
    right: 18,
    padding: 6,
  },
  crownContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.proGoldLight,
    borderWidth: 1.5,
    borderColor: '#F3DB9E',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: Spacing.xl,
    paddingHorizontal: Spacing.md,
  },
  benefitsList: {
    width: '100%',
    gap: 12,
    marginBottom: Spacing.xl,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  benefitText: {
    flex: 1,
    fontSize: 13,
    color: Colors.text,
    fontWeight: '500',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
    marginBottom: Spacing.lg,
  },
  priceValue: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.primary,
  },
  pricePeriod: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  activateButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: BorderRadius.md,
    gap: 8,
  },
  activateButtonPressed: {
    opacity: 0.85,
  },
  activateButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
