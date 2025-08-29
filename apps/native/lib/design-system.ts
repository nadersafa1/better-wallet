// Design System for Better Wallet
// Based on design.json specifications

export const colors = {
  backgrounds: {
    primary: 'bg-gradient-to-b from-[#A8E6CF] via-[#88D8A3] to-[#7FCDCD]',
    cardPrimary: 'bg-white',
    cardSecondary: 'bg-[#F8F9FA]',
    accent: 'bg-gradient-to-br from-[#FFE066] to-[#FFF59D]',
    dark: 'bg-[#1A1A1A]',
  },
  text: {
    primary: 'text-[#1A1A1A]',
    secondary: 'text-[#6B7280]',
    light: 'text-[#9CA3AF]',
    white: 'text-white',
    success: 'text-[#10B981]',
    error: 'text-[#EF4444]',
  },
  borders: {
    light: 'border-[#E5E7EB]',
    medium: 'border-[#D1D5DB]',
    accent: 'border-[#FFE066]',
  },
  shadows: {
    card: 'shadow-[0_8px_32px_rgba(0,0,0,0.08)]',
    button: 'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
    elevation: 'shadow-[0_4px_16px_rgba(0,0,0,0.16)]',
    subtle: 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]',
  },
};

export const typography = {
  displayLarge: 'text-5xl font-bold text-[#1A1A1A] leading-tight tracking-tight',
  displayMedium: 'text-4xl font-semibold text-[#1A1A1A] leading-tight',
  headingLarge: 'text-2xl font-semibold text-[#1A1A1A] leading-tight',
  headingMedium: 'text-xl font-semibold text-[#1A1A1A] leading-tight',
  bodyLarge: 'text-base font-medium text-[#1A1A1A] leading-relaxed',
  bodyMedium: 'text-sm font-normal text-[#6B7280] leading-relaxed',
  bodySmall: 'text-xs font-normal text-[#9CA3AF] leading-relaxed',
  amounts: {
    positive: 'text-[#10B981] font-semibold',
    negative: 'text-[#EF4444] font-semibold',
    neutral: 'text-[#1A1A1A] font-semibold',
  },
};

export const spacing = {
  screen: 'px-5',
  card: 'p-5',
  button: 'px-6 py-4',
  icon: 'p-2',
  section: 'space-y-6',
  item: 'space-y-3',
};

export const borderRadius = {
  large: 'rounded-3xl',
  medium: 'rounded-2xl',
  small: 'rounded-xl',
  round: 'rounded-full',
};

export const components = {
  card: {
    standard: `${colors.backgrounds.cardPrimary} ${borderRadius.large} ${colors.shadows.card} ${spacing.card}`,
    highlighted: `${colors.backgrounds.accent} ${borderRadius.large} ${colors.shadows.button} p-6`,
    transaction: `${colors.backgrounds.cardPrimary} ${borderRadius.medium} ${colors.shadows.subtle} p-4 my-2`,
  },
  button: {
    primary: `${colors.backgrounds.dark} text-white ${borderRadius.medium} ${spacing.button} text-base font-semibold ${colors.shadows.button}`,
    secondary: `${colors.backgrounds.cardSecondary} ${colors.text.primary} ${borderRadius.medium} ${spacing.button} text-base font-medium border border-[#E5E7EB]`,
    action: `${colors.backgrounds.cardPrimary} ${borderRadius.large} ${spacing.button} ${colors.shadows.card} text-sm font-medium`,
  },
  icon: {
    navigation: 'w-6 h-6 text-[#6B7280]',
    action: 'w-5 h-5 text-[#6B7280]',
    currency: 'w-10 h-10 bg-[#1A1A1A] rounded-xl p-2',
    avatar: 'w-10 h-10 rounded-full',
  },
};

export const gradients = {
  screen: 'bg-gradient-to-b from-[#A8E6CF] via-[#88D8A3] to-[#7FCDCD]',
  accent: 'bg-gradient-to-br from-[#FFE066] to-[#FFF59D]',
};

export const shadows = {
  card: 'shadow-[0_8px_32px_rgba(0,0,0,0.08)]',
  button: 'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
  subtle: 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]',
};
