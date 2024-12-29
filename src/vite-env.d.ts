/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_BACKEND_API: string;
  VITE_BACKEND_WS: string;
  VITE_PASSPHRASE: string;
  VITE_WHITE_LABEL_URL: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
