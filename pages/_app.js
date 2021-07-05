import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    
    const tagIntem = {
      gtmId: "GTM-W88MHN6",
      events: {
        onclick
      }
    }
    
    TagManager.initialize(tagIntem)
  })

  return <Component {...pageProps} />
}

export default MyApp
