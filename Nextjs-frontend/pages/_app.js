// import '../styles/globals.css'
import { AuthProvider } from 'context/auth'
import '../styles/reset.css'
import '../styles/Navbar.css'
import '../styles/Footer.css'
import '../styles/HeroSection.css'
import '../styles/FeaturedProducts.css'
import "../styles/Categories.css"
import "../styles/profilePage.css"
import "../styles/login.css"
import "keen-slider/keen-slider.min.css";
import "../components/login/loginForm.css"
import "../components/categoryProducts/categoryProduct.css"
import "../components/details/details.css"
import "../components/favorite/favorite.css"
import "../components/about/about.css"

export default function App({ Component, pageProps }) {
  return <AuthProvider >
  <Component {...pageProps} />
</AuthProvider>
}
