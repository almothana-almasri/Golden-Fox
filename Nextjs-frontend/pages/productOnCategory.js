import CategoryProduct from "components/categoryProducts/categoryProduct"
import Navbar from "components/layout/Navbar"
import Footer from "components/layout/Footer"
import { useState, useEffect } from "react"

export default function productOnCategory(){

    
    const [decodedToken, setDecodedToken] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
        setDecodedToken(JSON.parse(localStorage.getItem('decodedToken')))
        }
    }, []);

    
    return(
        <>

        <Navbar decodedToken={decodedToken}/>
        
        <CategoryProduct decodedToken={decodedToken} />
        
        <Footer />

      
   
      
        </>
  
    )
}