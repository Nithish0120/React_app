import '../css/style.css'
import Header from '../components/header'
import Footer from '../components/footer'
export default function App({ Component, pageProps }) {
   return (
   <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
   <Header/>
   <Component {...pageProps} />
   <Footer/>
   
   </>
   )
}