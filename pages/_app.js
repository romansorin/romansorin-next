import 'styles/globals.css'
import ReactGA from 'react-ga'
import { useEffect } from 'react'

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    ReactGA.initialize('G-NVT55HJ438', {
      debug: true,
      titleCase: false
    })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  return <Component {...pageProps} />
}

export default App
