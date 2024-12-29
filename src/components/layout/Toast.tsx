import { Slide, ToastContainer as ToastifyContainer, toast as toastify } from 'react-toastify';

export function ToastContainer() {
  return (
    <ToastifyContainer
      autoClose={3500}
      position='bottom-right'
      transition={Slide}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

export const toast = {
  success,
  warning,
  error,
  info,
  primary,
};

function success(message: string) {
  toastify(message, { type: 'success' });
}

function warning(message: string) {
  toastify(message, { type: 'warning' });
}

function error(message: string) {
  toastify(message, { type: 'error' });
}

function info(message: string) {
  toastify(message, { type: 'info' });
}

function primary(message: string) {
  toastify(message, { type: 'default' });
}
