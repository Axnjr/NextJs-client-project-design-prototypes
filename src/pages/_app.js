import '@/styles/globals.css'
import Header from 'component/Header'

function App({ Component , pageProps }) {
  return (
    <Header
      Children={<Component {...pageProps}/>} >
    </Header>
  )
}

export default App
