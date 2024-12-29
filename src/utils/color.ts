import Color from 'color';

function lighten(color: string, ratio = 0.1): string {
  return Color(color).lighten(ratio).hex();
}
function darken(color: string, ratio = 0.1): string {
  return Color(color).darken(ratio).hex();
}
function fade(color: string, ratio = 0.1): string {
  return Color(color).fade(ratio).hex();
}
function desaturate(color: string, ratio = 0.1): string {
  return Color(color).desaturate(ratio).hex();
}
function opacity(color: string, ratio = 0.5): string {
  return Color(color).alpha(ratio).toString();
}

export const color = { opacity, lighten, darken, fade, desaturate };
