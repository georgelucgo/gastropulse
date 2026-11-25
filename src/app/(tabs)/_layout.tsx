import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Home, ShoppingBag, Settings } from 'lucide-react-native';
import { Colors } from '@/constants/theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 86 : 64,
          paddingBottom: Platform.OS === 'ios' ? 28 : 10,
          paddingTop: 8,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explorar',
          tabBarIcon: ({ color, size }) => (
            <Home size={size || 22} color={color} strokeWidth={2.2} />
          ),
        }}
      />
      <Tabs.Screen
        name="pedidos"
        options={{
          title: 'Pedidos',
          tabBarIcon: ({ color, size }) => (
            <ShoppingBag size={size || 22} color={color} strokeWidth={2.2} />
          ),
        }}
      />
      <Tabs.Screen
        name="gestao"
        options={{
          title: 'Gestão',
          tabBarIcon: ({ color, size }) => (
            <Settings size={size || 22} color={color} strokeWidth={2.2} />
          ),
        }}
      />
    </Tabs>
  );
}
