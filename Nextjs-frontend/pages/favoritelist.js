import React, { useState, useEffect } from 'react';
import FavoriteListFetcher from 'components/favorite/favorite';
import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";

import axios from 'axios';

export default function FavoriteListPage(){

    
  const [products , setproducts] = useState()
    useEffect(() => {
        async function getProducts() {
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_API_RESOURCE_URL);
                setproducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getProducts();
    }, [products]);

    
    // products ? (products.map((product) => {
    //   localStorage.setItem('producId',JSON.stringify(product.id));

    // })) : 'error' ;
    

//   const [producId, setproducId] = useState()
//     useEffect(() => {
//         if (typeof window !== 'undefined' && window.localStorage) {

//             setproducId(localStorage.getItem('producId'))
//         }
//     }, []);



  const [decodedToken, setDecodedToken] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
        setDecodedToken(JSON.parse(localStorage.getItem('decodedToken')))
        }
    }, []);

    

    

  return (
    <div className="favoriteFullPage">
      <Navbar decodedToken={decodedToken} />
      <div className='favoriteListDiv'>
      <FavoriteListFetcher products={products} decodedToken={decodedToken}/>
      </div>
      <Footer />
    </div>
  );

}