import { UseQueryOptions } from 'react-query';

import { TApiError } from './api/ApiError';

export type TQueryOptions<T = unknown> = UseQueryOptions<T, TApiError>;
