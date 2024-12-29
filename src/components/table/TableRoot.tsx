import { createContext } from 'react';
import styled from 'styled-components';

type TTableProviderProps = { header: string[]; children: React.ReactNode };
type TTableContainerProps = { children: React.ReactNode; header?: string[]; className?: string };
type TTableContext = { state: { header: string[] } };

export const TableContext = createContext<TTableContext>({ state: { header: [] } });

export function TableProvider({ header, children }: TTableProviderProps) {
  return <TableContext.Provider value={{ state: { header } }}>{children}</TableContext.Provider>;
}

export function TableContainer({ children, header, className, ...props }: TTableContainerProps) {
  return (
    <TableProvider header={header ?? []}>
      <StyledContainer className={`text-break ${className ?? ''}`} {...props}>
        {children}
      </StyledContainer>
    </TableProvider>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  box-shadow: ${({ theme }) => theme.drop_shadows.sm};
`;
