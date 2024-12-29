import { createBrowserRouter } from 'react-router-dom';

import { RouteErrorBoundary } from './components/ErrorBoundary';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // public
      {
        path: '/',
        index: true,
        element: <Home />,
        errorElement: <RouteErrorBoundary />,
      },
    ],
  },
]);

export default router;
