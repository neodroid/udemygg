import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Head from 'next/head'

import theme from '../theme'

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
      <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtag/js?id=UA-172440389-1'+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXX');`}} />
        <title>Udemy Murah</title>
        <link rel="icon" href="/favicon.ico" />
        {/* //<link rel="shortcut icon" href="../assets/logo.ico" /> */}
      </Head>
      <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/gtag/js?id=UA-172440389-1" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
      
     
        <CSSReset />
        <Component {...pageProps} />
     
    </ThemeProvider>
  )
}

export default MyApp


{/* <ColorModeProvider></ColorModeProvider> */}