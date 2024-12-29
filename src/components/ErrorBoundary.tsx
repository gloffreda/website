import React from 'react';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from './layout/header';
import { LabelInfo } from './Typography';

export class ErrorBoundary extends React.Component<{ fallback: React.ReactNode; children: React.ReactNode }> {
  state: { hasError: boolean } = { hasError: false };

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    //
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export function RouteErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();
  let errorMessage = 'UNKNOWN_ERROR';

  if (isRouteErrorResponse(error)) {
    errorMessage = 'NOT_FOUND';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = 'UNKNOWN_ERROR';
  }

  return (
    <>
      <Header.Root>
        <Header.Content.Root>
          <Header.Content.Title text={'ERROR_TITLE'} />
          <Header.Content.Description text={'ERROR_SUBTITLE'} />
        </Header.Content.Root>
        <Header.Action text='CREATE_TICKET' onClick={() => navigate('/support')} />
      </Header.Root>
      <Container>
        <LabelInfo label='ERROR_DESCRIPTION' value={errorMessage} />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacings[4]};
`;
