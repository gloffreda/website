import { Children, useState } from 'react';
import styled from 'styled-components';

import { Collapse } from '../Collapse';
import { Grid } from '../grid';
import { Icon } from '../Icon';
import { Label, TLabelProps } from '../Typography';

import { Input } from './Input';

export type TInputProps = {
  label?: TLabelProps;
  input?: React.InputHTMLAttributes<HTMLInputElement>;
};

export function ColorPicker({ label, input = {} }: TInputProps) {
  const colors = [
    '#fef2f2',
    '#fee2e2',
    '#fecaca',
    '#fca5a5',
    '#f87171',
    '#ef4444',
    '#dc2626',
    '#b91c1c',
    '#991b1b',
    '#7f1d1d',
    '#450a0a',
    '#fff7ed',
    '#ffedd5',
    '#fed7aa',
    '#fdba74',
    '#fb923c',
    '#f97316',
    '#ea580c',
    '#c2410c',
    '#9a3412',
    '#7c2d12',
    '#431407',
    '#fefce8',
    '#fef9c3',
    '#fef08a',
    '#fde047',
    '#facc15',
    '#eab308',
    '#ca8a04',
    '#a16207',
    '#854d0e',
    '#713f12',
    '#422006',
    '#f0fdf4',
    '#dcfce7',
    '#bbf7d0',
    '#86efac',
    '#4ade80',
    '#22c55e',
    '#16a34a',
    '#15803d',
    '#166534',
    '#14532d',
    '#052e16',
    '#eff6ff',
    '#dbeafe',
    '#bfdbfe',
    '#93c5fd',
    '#60a5fa',
    '#3b82f6',
    '#2563eb',
    '#1d4ed8',
    '#1e40af',
    '#1e3a8a',
    '#172554',
    '#faf5ff',
    '#f3e8ff',
    '#e9d5ff',
    '#d8b4fe',
    '#c084fc',
    '#a855f7',
    '#9333ea',
    '#7e22ce',
    '#6b21a8',
    '#581c87',
    '#3b0764',
    '#fff1f2',
    '#ffe4e6',
    '#fecdd3',
    '#fda4af',
    '#fb7185',
    '#f43f5e',
    '#e11d48',
    '#be123c',
    '#9f1239',
    '#881337',
    '#4c0519',
    '#fdf2f8',
    '#fce7f3',
    '#fbcfe8',
    '#f9a8d4',
    '#f472b6',
    '#ec4899',
    '#db2777',
    '#be185d',
    '#9d174d',
    '#831843',
    '#500724',
    '#ffffff',
    '#f3f4f6',
    '#e5e7eb',
    '#d1d5db',
    '#9ca3af',
    '#6b7280',
    '#4b5563',
    '#374151',
    '#1f2937',
    '#111827',
    '#000000',
  ];

  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const inputEle = document.getElementById('inputColor');
  inputEle?.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
      setOpen(false);
    }
  });

  return (
    <div className='flex flex-col   '>
      {label && <Label weight='light' {...label} />}

      <WrappedIcon color={selectedColor} onClick={() => setOpen(prev => !prev)}>
        <Icon icon='LuPalette' size='lg' theme={selectedColor ? 'white' : 'light_gray'} />
      </WrappedIcon>

      <DropDownContainer>
        <Collapse isOpen={open}>
          <DropDownCard>
            <div>
              <Grid.Root>
                <Grid.Col>
                  <Grid.Row cols={{ sm: 11 }}>
                    {Children.toArray(
                      colors.map(color => (
                        <CardColor
                          onClick={() => {
                            if (color === selectedColor) {
                              setSelectedColor('');
                            } else {
                              setSelectedColor(color);
                            }
                            setOpen(false);
                          }}
                          color={color}
                          selected={selectedColor === color}
                        />
                      )),
                    )}
                  </Grid.Row>
                </Grid.Col>
              </Grid.Root>

              <Input
                input={{
                  value: selectedColor,
                  onChange: ev => setSelectedColor(ev.target.value),
                }}
              />
            </div>
          </DropDownCard>
        </Collapse>
      </DropDownContainer>
    </div>
  );
}

type TCardColor = {
  color: string;
  selected: boolean;
  onClick?: () => void;
};

export function CardColor({ color, selected, onClick }: TCardColor) {
  return <ContainerCardColor color={color} selected={selected} onClick={onClick} />;
}

const WrappedIcon = styled.div<{ color?: string }>`
  width: fit-content;
  padding: ${({ theme }) => theme.spacings[2]};
  background-color: ${({ theme, color }) => (color ? color : theme.colors.bright_gray)};
  border-radius: ${({ theme }) => theme.border_radius.lg};
  cursor: pointer;
`;

const DropDownContainer = styled.div`
  z-index: 999;
  position: absolute;
  width: 100%;
  display: flex;
  margin-top: 60px;
`;

const DropDownCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border_radius['2xl']};
  filter: ${({ theme }) => theme.drop_shadows['DEFAULT']};
  color: ${({ theme }) => theme.text_color.black};
  width: 300px;
  overflow: auto;
  padding: ${({ theme }) => theme.spacings[2]};
  z-index: 9999;
`;

const ContainerCardColor = styled.div<TCardColor>`
  width: 15px;
  height: 15px;
  background-color: ${({ color, selected, theme }) => (selected ? theme.colors.white : color)};
  border: 2px solid ${({ color }) => color};
  border-radius: ${({ theme }) => theme.border_radius.sm};

  margin-bottom: ${({ theme }) => theme.spacings[2]};
  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
