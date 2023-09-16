import Navbar from "components/layout/Navbar"
import About from "components/about/about";
import Footer from "components/layout/Footer";
import { useState, useEffect } from "react"





export default function AboutPage (){

    const [decodedToken, setDecodedToken] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
        setDecodedToken(JSON.parse(localStorage.getItem('decodedToken')))
        }
    }, []);



    return(
        <>
            <Navbar decodedToken={decodedToken} />
            <About />
            <Footer />
        
        </>
    )
}