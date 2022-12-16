// ** React Imports
import React from 'react';

function MyApp({ Component, pageProps }: any) {

  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default MyApp;
