import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from './components/layout/Toast';
import { Loader } from './components/Loader';
import { IntlProvider } from './contexts/IntlState';
import { ThemeProvider } from './contexts/ThemeState';
import router from './router';

export default function App() {
  return (
    <ThemeProvider>
      <IntlProvider>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} fallbackElement={<Loader />} />
        </Suspense>
        <ToastContainer />
      </IntlProvider>
    </ThemeProvider>
  );
}
