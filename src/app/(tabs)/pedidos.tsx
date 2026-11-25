import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ShoppingBag } from 'lucide-react-native';
import { Colors, Spacing } from '@/constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PedidosScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ShoppingBag size={48} color={Colors.primary} strokeWidth={1.8} />
        <Text style={styles.title}>Meus Pedidos</Text>
        <Text style={styles.subtitle}>
          Esta tela será implementada na branch de pedidos.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    gap: Spacing.md,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});
