import { ThemeProvider, CSSReset, ColorModeProvider,Icon } from '@chakra-ui/core'
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
        
        <link rel="icon"  type="image/x-icon" href="/static/logo.png" />
        
        
          <title>Les Udemy Murah</title>
         
        </Head>
      
        <CSSReset />
        <Component  />
     
    </ThemeProvider>
   
    
  )
}

export default MyApp


{/* <ColorModeProvider></ColorModeProvider> */}