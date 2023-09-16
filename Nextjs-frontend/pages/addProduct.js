import Navbar from "components/layout/Navbar"
import { useState } from "react"
import { useEffect } from "react";


export default function AddProduct(){

    const [decodedToken, setDecodedToken] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
        setDecodedToken(JSON.parse(localStorage.getItem('decodedToken')))
        }
    }, []);






    return(

        <Navbar decodedToken={decodedToken}/>




    )
}