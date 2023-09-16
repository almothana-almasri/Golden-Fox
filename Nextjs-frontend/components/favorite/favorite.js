import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import useResource from 'hooks/useResource';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MagicSpinner } from "react-spinners-kit";


const FavoriteListFetcher = ({ products, decodedToken }) => {
  const [favoriteData, setFavoriteData] = useState([]);
  const [loading, setLoading] = useState(true);


  const { response, createResource, deleteResource } = useResource(`Favourite_product/`)
  function handleRemoveFromFavorites(id) {
    deleteResource(id)
  }

  function handleProductId(id) {
    localStorage.setItem("productId", id)

  }





  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_RESOURCE_URL + 'Favourite_product');
        setFavoriteData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [favoriteData]);

  if (loading) {
    const styles = {
        height: '100vh',
        background: 'linear-gradient(to bottom, #E5C27C, #02000E)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={styles}>
            <MagicSpinner size={130} color="#00ff89" loading={loading} />
        </div>
    );
}    

  return (
    <div className="favourite_product">
      <h2 className='ftext1'>Favourite List</h2>
      <hr />
      <div className="product-list">

        {favoriteData ? (
          favoriteData.map((x) => {
            if (x.owner === decodedToken.user_id) {
              return (
                <div key={x.id}>
                  {products ? (
                    products.map((i) => {
                      if (i.id === x.Product) {
                        return (
                          <div className="product-list">
                            <div key={i.id} className="product" onClick={() => handleProductId(i.id)}>

                              <Link className='productde' href="/productDetails">
                                <Image src={i.image} width='200' height='200' />

                              </Link>
                              {/* <button className="remove_buttonf" key={x.id} onClick={() => { handleRemoveFromFavorites(x.id); }}>
                            <FontAwesomeIcon icon={faTrashAlt} /> 
                          </button> */}
                              <div className='p_r_f'>

                                <div>
                                <h3>{i.Title}</h3>
                                <p>Price: {i.price} J</p>
                                </div>

                                <div className='reFav'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" className="remove_buttonf" key={x.id} onClick={() => { handleRemoveFromFavorites(x.id); }}>
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                                </svg>
                                </div>

                              </div>


                            </div>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })
                  ) : null}
                </div>
              );
            } else {
              return null;
            }
          })
        ) : null}

      </div>
    </div>
  );
};

export default FavoriteListFetcher;