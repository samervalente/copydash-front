import Head from 'next/head';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '../theme';
import 'simplebar-react/dist/simplebar.min.css';
import { NextPage } from 'next';

const App = (props: { Component: any; pageProps: any; }) => {
  const { Component, pageProps } = props;


  const getLayout = Component.getLayout ?? ((page: NextPage) => page);

  const theme = createTheme();

  return (

    <>
      <Head>
        <title>
          CopyDash
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>

  );
};

export default App;
