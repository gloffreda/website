import { useMemo } from 'react';
import styled, { css } from 'styled-components';

import { DEFAULT, screens } from '../themes/default';
import { WindowSize } from '../utils/windowSize';

import { Icon } from './Icon';
import { Label } from './Typography';

type TPaginateProps = {
  pages?: number;
  page?: number;
  range?: number;
  onPageClick: (page: number) => void;
};

export function Paginate({ pages = 1, page = 1, range = 5, onPageClick }: TPaginateProps) {
  const { startPage, centerRange } = useMemo(() => {
    const centerRange = Math.floor(range / 2) * 2 + 1; // this will always generate a odd number
    const startPage = Math.min(pages - range - 1, Math.max(3, Math.ceil(page - centerRange / 2)));
    return { centerRange, startPage };
  }, [page, pages, range]);

  const isWeb = WindowSize(DEFAULT.screens.sm);

  const mappedRange = useMemo<[number[], number[], number[]]>(() => {
    if (isNaN(pages)) {
      return [[1], [], []];
    }
    if (pages <= 4) return [new Array(pages).fill(0).map((_, index) => index + 1), [], []];
    const head = [1, 2];
    const tail = [pages - 1, pages];

    const body = new Array(centerRange)
      .fill(startPage)
      .map((page, index) => page + index)
      .filter(page => {
        if (page <= 0) return false;
        if (page >= pages) return false;
        return !(head.includes(page) || tail.includes(page));
      });
    return [head, body, tail];
  }, [centerRange, pages, startPage]);

  function handleOnClick(page: number) {
    onPageClick(page);
  }

  function handleNextPage() {
    if (page + 1 > pages) return;
    onPageClick(page + 1);
  }

  function handlePreviousPage() {
    if (page - 1 <= 0) return;
    onPageClick(page - 1);
  }

  const lastValueHead = mappedRange[0][mappedRange[0]?.length - 1];
  const firstValueBody = mappedRange[1][0];
  const lastValueBody = mappedRange[1][mappedRange[1]?.length - 1];
  const firstValueTail = mappedRange[2][0];

  const hasHeadGap = lastValueHead < firstValueBody - 1;
  const hasTailGap = firstValueTail > lastValueBody + 1;

  return (
    <PageList>
      <PageItem active={false} onClick={handlePreviousPage}>
        {isWeb ? <Label text='PREVIOUS' weight='medium' /> : <Icon icon='LuArrowLeft' />}
      </PageItem>
      {isWeb &&
        mappedRange[0].map(mapPage => (
          <PageItem active={mapPage === page} key={mapPage} onClick={() => handleOnClick(mapPage)}>
            <Label text={mapPage.toLocaleString()} isName weight='medium' />
          </PageItem>
        ))}
      {isWeb && hasHeadGap && (
        <PageItem active={false} onClick={() => handleOnClick(page - range)}>
          <Label text='...' isName weight='medium' />
        </PageItem>
      )}
      {isWeb &&
        mappedRange[1].map(mapPage => (
          <PageItem active={mapPage === page} key={mapPage} onClick={() => handleOnClick(mapPage)}>
            <Label text={mapPage.toLocaleString()} isName weight='medium' />
          </PageItem>
        ))}

      {isWeb && hasTailGap && (
        <PageItem active={false} onClick={() => handleOnClick(page + range)}>
          <Label text='...' isName weight='medium' />
        </PageItem>
      )}

      {isWeb &&
        mappedRange[2].map(mapPage => (
          <PageItem active={mapPage === page} key={mapPage} onClick={() => handleOnClick(mapPage)}>
            <Label text={mapPage.toLocaleString()} isName weight='medium' />
          </PageItem>
        ))}
      {!isWeb && <Label text={page + ' to ' + pages} isName weight='medium' />}

      <PageItem active={false} onClick={handleNextPage}>
        {isWeb ? <Label text='NEXT' weight='medium' /> : <Icon icon='LuArrowRight' />}
      </PageItem>
    </PageList>
  );
}

const PageList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacings['2']};
  ${screens.md(css`
    justify-content: flex-start;
  `)};
`;

const PageItem = styled.li<{ active: boolean }>`
  cursor: ${({ active }) => (active ? 'default' : 'pointer')};
  background-color: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.light_gray)};
  padding: ${({ theme }) => `${theme.spacings['1.5']} ${theme.spacings['4']}`};
  border-radius: ${({ theme }) => theme.border_radius['2xl']};
  color: ${({ theme, active }) => (active ? theme.text_color.white : theme.text_color.dark_gray)};
  :hover {
    background-color: ${({ theme, active }) => (active ? '' : theme.colors.secondary)};
    color: ${({ theme, active }) => (active ? '' : theme.colors.light_gray)};
  }
`;
