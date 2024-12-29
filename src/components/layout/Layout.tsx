import { Suspense, useCallback, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { DEFAULT } from '../../themes/default';
import { WindowSize } from '../../utils/windowSize';
import { FullSizeLader } from '../Loader';

import { toast } from './Toast';

export function Layout() {
  const isWeb = WindowSize(DEFAULT.screens.md);
  const intl = useIntl();

  const handleOfflineEvent = useCallback(() => {
    toast.warning(intl.formatMessage({ id: 'OFFLINE_STATE_MESSAGE' }));
  }, [intl]);

  const handleOnlineEvent = useCallback(() => {
    toast.info(intl.formatMessage({ id: 'ONLINE_STATE_MESSAGE' }));
  }, [intl]);

  useEffect(() => {
    window.addEventListener('offline', handleOfflineEvent);
    window.addEventListener('online', handleOnlineEvent);

    return () => {
      window.removeEventListener('offline', handleOfflineEvent);
      window.removeEventListener('online', handleOnlineEvent);
    };
  }, [handleOnlineEvent, handleOfflineEvent]);

  return (
    <MainContainer>
      <div className='h-full flex overflow-hidden'>
        <Suspense fallback={<FullSizeLader />}>
          <BodyContainer>
            <Outlet />
          </BodyContainer>
        </Suspense>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.8s cubic-bezier(0.07, 0.95, 0, 1);
`;

const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
`;
