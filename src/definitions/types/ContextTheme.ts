/* eslint-disable @typescript-eslint/naming-convention */
export type TColors = {
  inherit: string;
  transparent: string;

  // shades of gray
  white: string;
  bright_white: string;
  medium_white: string;
  bright_gray: string;
  light_gray: string;
  gray: string;
  dark_gray: string;
  black: string;
  // theme
  primary: string;
  secondary: string;
  tertiary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  link: string;

  'bg-slate-50': string;
  'bg-slate-100': string;
  'bg-slate-200': string;
  'bg-slate-300': string;
  'bg-slate-400': string;
  'bg-slate-500': string;
  'bg-slate-600': string;
  'bg-slate-700': string;
  'bg-slate-800': string;
  'bg-slate-900': string;
  'bg-slate-950': string;
  'bg-gray-50': string;
  'bg-gray-100': string;
  'bg-gray-200': string;
  'bg-gray-300': string;
  'bg-gray-400': string;
  'bg-gray-500': string;
  'bg-gray-600': string;
  'bg-gray-700': string;
  'bg-gray-800': string;
  'bg-gray-900': string;
  'bg-gray-950': string;
  'bg-zinc-50': string;
  'bg-zinc-100': string;
  'bg-zinc-200': string;
  'bg-zinc-300': string;
  'bg-zinc-400': string;
  'bg-zinc-500': string;
  'bg-zinc-600': string;
  'bg-zinc-700': string;
  'bg-zinc-800': string;
  'bg-zinc-900': string;
  'bg-zinc-950': string;
  'bg-neutral-50': string;
  'bg-neutral-100': string;
  'bg-neutral-200': string;
  'bg-neutral-300': string;
  'bg-neutral-400': string;
  'bg-neutral-500': string;
  'bg-neutral-600': string;
  'bg-neutral-700': string;
  'bg-neutral-800': string;
  'bg-neutral-900': string;
  'bg-neutral-950': string;
  'bg-stone-50': string;
  'bg-stone-100': string;
  'bg-stone-200': string;
  'bg-stone-300': string;
  'bg-stone-400': string;
  'bg-stone-500': string;
  'bg-stone-600': string;
  'bg-stone-700': string;
  'bg-stone-800': string;
  'bg-stone-900': string;
  'bg-stone-950': string;
  'bg-red-50': string;
  'bg-red-100': string;
  'bg-red-200': string;
  'bg-red-300': string;
  'bg-red-400': string;
  'bg-red-500': string;
  'bg-red-600': string;
  'bg-red-700': string;
  'bg-red-800': string;
  'bg-red-900': string;
  'bg-red-950': string;
  'bg-orange-50': string;
  'bg-orange-100': string;
  'bg-orange-200': string;
  'bg-orange-300': string;
  'bg-orange-400': string;
  'bg-orange-500': string;
  'bg-orange-600': string;
  'bg-orange-700': string;
  'bg-orange-800': string;
  'bg-orange-900': string;
  'bg-orange-950': string;
  'bg-amber-50': string;
  'bg-amber-100': string;
  'bg-amber-200': string;
  'bg-amber-300': string;
  'bg-amber-400': string;
  'bg-amber-500': string;
  'bg-amber-600': string;
  'bg-amber-700': string;
  'bg-amber-800': string;
  'bg-amber-900': string;
  'bg-amber-950': string;
  'bg-yellow-50': string;
  'bg-yellow-100': string;
  'bg-yellow-200': string;
  'bg-yellow-300': string;
  'bg-yellow-400': string;
  'bg-yellow-500': string;
  'bg-yellow-600': string;
  'bg-yellow-700': string;
  'bg-yellow-800': string;
  'bg-yellow-900': string;
  'bg-yellow-950': string;
  'bg-lime-50': string;
  'bg-lime-100': string;
  'bg-lime-200': string;
  'bg-lime-300': string;
  'bg-lime-400': string;
  'bg-lime-500': string;
  'bg-lime-600': string;
  'bg-lime-700': string;
  'bg-lime-800': string;
  'bg-lime-900': string;
  'bg-lime-950': string;
  'bg-green-50': string;
  'bg-green-100': string;
  'bg-green-200': string;
  'bg-green-300': string;
  'bg-green-400': string;
  'bg-green-500': string;
  'bg-green-600': string;
  'bg-green-700': string;
  'bg-green-800': string;
  'bg-green-900': string;
  'bg-green-950': string;
  'bg-emerald-50': string;
  'bg-emerald-100': string;
  'bg-emerald-200': string;
  'bg-emerald-300': string;
  'bg-emerald-400': string;
  'bg-emerald-500': string;
  'bg-emerald-600': string;
  'bg-emerald-700': string;
  'bg-emerald-800': string;
  'bg-emerald-900': string;
  'bg-emerald-950': string;
  'bg-teal-50': string;
  'bg-teal-100': string;
  'bg-teal-200': string;
  'bg-teal-300': string;
  'bg-teal-400': string;
  'bg-teal-500': string;
  'bg-teal-600': string;
  'bg-teal-700': string;
  'bg-teal-800': string;
  'bg-teal-900': string;
  'bg-teal-950': string;
  'bg-cyan-50': string;
  'bg-cyan-100': string;
  'bg-cyan-200': string;
  'bg-cyan-300': string;
  'bg-cyan-400': string;
  'bg-cyan-500': string;
  'bg-cyan-600': string;
  'bg-cyan-700': string;
  'bg-cyan-800': string;
  'bg-cyan-900': string;
  'bg-cyan-950': string;
  'bg-sky-50': string;
  'bg-sky-100': string;
  'bg-sky-200': string;
  'bg-sky-300': string;
  'bg-sky-400': string;
  'bg-sky-500': string;
  'bg-sky-600': string;
  'bg-sky-700': string;
  'bg-sky-800': string;
  'bg-sky-900': string;
  'bg-sky-950': string;
  'bg-blue-50': string;
  'bg-blue-100': string;
  'bg-blue-200': string;
  'bg-blue-300': string;
  'bg-blue-400': string;
  'bg-blue-500': string;
  'bg-blue-600': string;
  'bg-blue-700': string;
  'bg-blue-800': string;
  'bg-blue-900': string;
  'bg-blue-950': string;
  'bg-indigo-50': string;
  'bg-indigo-100': string;
  'bg-indigo-200': string;
  'bg-indigo-300': string;
  'bg-indigo-400': string;
  'bg-indigo-500': string;
  'bg-indigo-600': string;
  'bg-indigo-700': string;
  'bg-indigo-800': string;
  'bg-indigo-900': string;
  'bg-indigo-950': string;
  'bg-violet-50': string;
  'bg-violet-100': string;
  'bg-violet-200': string;
  'bg-violet-300': string;
  'bg-violet-400': string;
  'bg-violet-500': string;
  'bg-violet-600': string;
  'bg-violet-700': string;
  'bg-violet-800': string;
  'bg-violet-900': string;
  'bg-violet-950': string;
  'bg-purple-50': string;
  'bg-purple-100': string;
  'bg-purple-200': string;
  'bg-purple-300': string;
  'bg-purple-400': string;
  'bg-purple-500': string;
  'bg-purple-600': string;
  'bg-purple-700': string;
  'bg-purple-800': string;
  'bg-purple-900': string;
  'bg-purple-950': string;
  'bg-fuchsia-50': string;
  'bg-fuchsia-100': string;
  'bg-fuchsia-200': string;
  'bg-fuchsia-300': string;
  'bg-fuchsia-400': string;
  'bg-fuchsia-500': string;
  'bg-fuchsia-600': string;
  'bg-fuchsia-700': string;
  'bg-fuchsia-800': string;
  'bg-fuchsia-900': string;
  'bg-fuchsia-950': string;
  'bg-pink-50': string;
  'bg-pink-100': string;
  'bg-pink-200': string;
  'bg-pink-300': string;
  'bg-pink-400': string;
  'bg-pink-500': string;
  'bg-pink-600': string;
  'bg-pink-700': string;
  'bg-pink-800': string;
  'bg-pink-900': string;
  'bg-pink-950': string;
  'bg-rose-50': string;
  'bg-rose-100': string;
  'bg-rose-200': string;
  'bg-rose-300': string;
  'bg-rose-400': string;
  'bg-rose-500': string;
  'bg-rose-600': string;
  'bg-rose-700': string;
  'bg-rose-800': string;
  'bg-rose-900': string;
  'bg-rose-950': string;
};

export type TScreens = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
};

export type TSpacings = {
  1: string;
  1.5: string;
  2: string;
  2.5: string;
  3: string;
  3.5: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  14: string;
  16: string;
  20: string;
  24: string;
  28: string;
  32: string;
  36: string;
  40: string;
  44: string;
  48: string;
  52: string;
  56: string;
  60: string;
  64: string;
  72: string;
  80: string;
  96: string;
};

export type TDropShadows = {
  sm: string;
  DEFAULT: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  none: string;
};

export type TButtonColors = {
  DEFAULT: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
  primary: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
  light: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
  success: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
  danger: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
  tertiary: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
  secondary: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
  info: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
  link: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
  };
  warning: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
  transparent: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
  login: {
    color: string;
    'background-color': string;
    ':hover': { color: string; 'background-color': string };
    ':disabled': { color?: string; 'background-color': string };
    active: { 'background-color': string };
  };
};

export type TCardColors = {
  DEFAULT: {
    color: string;
    'background-color': string;
    border?: string;
  };
  primary: {
    color: string;
    'background-color': string;
    border?: string;
  };
  light: {
    color: string;
    'background-color': string;
    border?: string;
  };
  success: {
    color: string;
    'background-color': string;
    border?: string;
  };
  danger: {
    color: string;
    'background-color': string;
    border?: string;
  };
  secondary: {
    color: string;
    'background-color': string;
    border?: string;
  };
  info: {
    color: string;
    'background-color': string;
    border?: string;
  };

  warning: {
    color: string;
    'background-color': string;
    border?: string;
  };
  transparent: {
    color: string;
    'background-color': string;
    border?: string;
  };
  login: {
    color: string;
    'background-color': string;
    border?: string;
  };
};

export type TBadgeColors = {
  DEFAULT: {
    color: string;
    'background-color': string;
    ':disabled': { opacity: number };
    active: { 'background-color': string };
  };
  primary: {
    color: string;
    'background-color': string;
    ':disabled': { opacity: number };
    active: { 'background-color': string };
  };
  light: {
    color: string;
    'background-color': string;
    ':disabled': { opacity: number };
    active: { 'background-color': string };
  };
  success: {
    color: string;
    'background-color': string;
    ':disabled': { opacity: number };
    active: { 'background-color': string };
  };
  danger: {
    color: string;
    'background-color': string;
    ':disabled': { opacity: number };
    active: { 'background-color': string };
  };
  secondary: {
    color: string;
    'background-color': string;
    ':disabled': { opacity: number };
    active: { 'background-color': string };
  };
  info: {
    color: string;
    'background-color': string;
    ':disabled': { opacity: number };
    active: { 'background-color': string };
  };
  warning: {
    color: string;
    'background-color': string;
    ':disabled': { opacity: number };
    active: { 'background-color': string };
  };
  transparent: {
    color: string;
    'background-color': string;
    ':disabled': { opacity: number };
    active: { 'background-color': string };
  };
};

export type TButtonSizes = {
  sm: {
    height: string;
    'padding-left': string;
    'padding-right': string;
  };
  DEFAULT: {
    height: string;
    'padding-left': string;
    'padding-right': string;
  };
};
export type TInputSizes = TButtonSizes;

export type TTextColors = TColors;

export type TFontWeight = {
  inherit: string;
  thin: number;
  extralight: number;
  light: number;
  DEFAULT: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
  black: number;
};

export type TFontSizes = {
  xs: {
    'font-size': string;
    'line-height': string;
  };
  sm: {
    'font-size': string;
    'line-height': string;
  };
  DEFAULT: {
    'font-size': string;
    'line-height': string;
  };
  lg: {
    'font-size': string;
    'line-height': string;
  };
  xl: {
    'font-size': string;
    'line-height': string;
  };
  '2xl': {
    'font-size': string;
    'line-height': string;
  };
  '3xl': {
    'font-size': string;
    'line-height': string;
  };
  '4xl': {
    'font-size': string;
    'line-height': string;
  };
  '5xl': {
    'font-size': string;
    'line-height': string;
  };
  '6xl': {
    'font-size': string;
    'line-height': string;
  };
  '7xl': {
    'font-size': string;
    'line-height': string;
  };
  '8xl': {
    'font-size': string;
    'line-height': string;
  };
  '9xl': {
    'font-size': string;
    'line-height': string;
  };
};

export type TBorderRadius = {
  sm: string;
  DEFAULT: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
};

type TSidebar = {
  [key: string]: string;
  color: string;
  color_hover: string;
};

export type TTheme = {
  // [key: string]: TThemeTypes;
  colors: TColors;
  screens: TScreens;
  spacings: TSpacings;
  drop_shadows: TDropShadows;
  button_colors: TButtonColors;
  button_sizes: TButtonSizes;
  input_sizes: TInputSizes;
  text_color: TTextColors;
  font_size: TFontSizes;
  font_weight: TFontWeight;
  sidebar: TSidebar;
  border_radius: TBorderRadius;
  badge_colors: TBadgeColors;
  card_colors: TCardColors;
};
