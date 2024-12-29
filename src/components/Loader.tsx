import styled from 'styled-components';

import { TColors } from '../definitions/types/ContextTheme';
import { DEFAULT } from '../themes/default';
type TLoader = {
  size?: 15 | 20 | 30 | 40 | 50 | 100;
  color?: keyof TColors;
};

export function FullSizeLader() {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <Loader />
    </div>
  );
}
export function Loader({ size = 50, color = 'primary' }: TLoader) {
  return (
    <StyledLoader size={size} color={color} viewBox='0 0 50 50'>
      <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
    </StyledLoader>
  );
}

export const StyledLoader = styled.svg<{
  size: number;
  color: keyof TColors;
}>`
  animation: rotate 2s linear infinite;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  .path {
    stroke: ${({ theme, color }) => theme?.colors?.[color] || DEFAULT.colors.primary};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export const BouncingBar = styled.div`
  width: 100%;
  height: 4px;
  /* display: inline-block; */
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
  ::after {
    content: '';
    width: 30%;
    height: 4px;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: hitZak 1s linear infinite alternate;
  }

  @keyframes hitZak {
    0% {
      left: 0;
      transform: translateX(-1%);
    }
    100% {
      left: 100%;
      transform: translateX(-99%);
    }
  }
`;
