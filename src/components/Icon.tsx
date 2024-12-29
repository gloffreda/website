import { useMemo } from 'react';
import { IconType } from 'react-icons';
import { FaAws, FaLinux, FaNodeJs, FaReact, FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import * as Lucide from 'react-icons/lu';
import { SiGooglecloud, SiMongodb, SiPostgresql } from 'react-icons/si';
import { useTheme } from 'styled-components';

import { TFontSizes, TTextColors } from '../definitions/types/ContextTheme';
// LuSignpostBig,
// LuWaypoints,

const Icons: { [key: string]: IconType } = {
  ...Lucide,
  FaAws,
  FaGolang,
  FaLinux,
  FaNodeJs,
  FaReact,
  SiGooglecloud,
  SiMongodb,
  SiPostgresql,
  FaStarHalfAlt,
  FaStar,
  FaRegStar,
};

export type TIconProps = {
  id?: string;
  title?: string;
  icon: string;
  size?: keyof TFontSizes;
  theme?: keyof TTextColors;
  style?: React.CSSProperties;
  className?: string;
  onClick?: React.MouseEventHandler;
  useColor?: string;
};

export function Icon({
  id,
  title,
  icon,
  size = 'DEFAULT',
  theme = 'inherit',
  style,
  className,
  onClick,
  useColor,
}: TIconProps) {
  const themeCtx = useTheme();
  const IconComponent = useMemo(() => Icons[icon], [icon]);
  const color = useMemo(() => {
    if (useColor) return useColor;
    return themeCtx.text_color[theme];
  }, [useColor, theme, themeCtx]);

  const iconSize = useMemo(
    () => Number(themeCtx.font_size[size]['font-size'].replaceAll('rem', '')) || 1,
    [size, themeCtx.font_size],
  );

  if (!IconComponent) return null;
  return (
    <IconComponent
      id={id}
      title={title}
      size={iconSize * 18}
      color={color}
      style={style}
      className={className}
      onClick={onClick}
    />
  );
}
