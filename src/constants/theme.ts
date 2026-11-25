const BaseColors = {
  // Brand colors
  primary: '#E94E1B',
  primaryDark: '#D7562A',
  primaryLight: '#FFF2ED',

  // PRO Accent
  proGold: '#E5A000',
  proGoldLight: '#FEF8EB',

  // Surfaces & Backgrounds
  background: '#FDF9F5',
  surface: '#FFFFFF',
  surfaceAlt: '#F5EFEB',
  surfaceSelected: '#E94E1B',

  // Text
  text: '#2D140D',
  textSecondary: '#5C443E',
  textMuted: '#96817B',
  textInverse: '#FFFFFF',

  // Semantic
  success: '#2E7D32',
  successLight: '#E8F5E9',
  border: '#EFE7E2',
  borderLight: '#F7F2EE',
  badge: '#FFF0EB',
  badgeText: '#E94E1B',
  tagAlert: '#D7562A',
  offlineBg: '#EEF2FF',
  offlineText: '#4338CA',
} as const;

export const Colors = {
  ...BaseColors,
  light: BaseColors,
  dark: BaseColors,
};

export type ThemeColor = keyof typeof BaseColors;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
} as const;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;
