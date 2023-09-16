import { useState } from "react"
import { useEffect } from "react";
import Login_form from "./login";
// import Form from "@/components/form";
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import HeroSection from "components/homepage/HeroSection";
import FeaturedProducts from "components/homepage/FeaturedProducts";
import Categories from "components/homepage/Categories";
import { useAuth } from "context/auth";




export default function Home() {

  const { login,user } = useAuth()
  
  const [decodedToken, setDecodedToken] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {

      setDecodedToken(JSON.parse(localStorage.getItem('decodedToken')))
      
    }
  }, []);


  const [token, setToken] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            
            let token_pef = localStorage.getItem('token')
            // console.log(11111,token_pef)

            setToken(JSON.parse(localStorage.getItem('token')))

            // console.log(token)
        }
    }, []);




  return (
    <div>
      
      <Navbar decodedToken={decodedToken}/>
      <HeroSection />
      <div className="homeS">
      <Categories />
      <FeaturedProducts decodedToken={decodedToken}/>
      </div>
      <Footer />
    </div>
  );
}