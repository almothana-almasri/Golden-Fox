import useResource from 'hooks/useResource';
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';


function FeaturedProducts({ decodedToken }) {

  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");


  const showAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
    setTimeout(() => {
      setAlertMessage("");
      setAlertType("");
    }, 3000);
  };

  // const addProductToUserProducts = (product) => {
  //   setUserProducts([...userProducts, product]);
    
  // };


  function handleProductId(id) {
    localStorage.setItem("productId", id)

  }

  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const createResource_fav = useResource("Favourite_product").createResource
  function handleAddToFav(id) {
    if (decodedToken) {
      ///////////////////////////////////////////////////////
      // Toggle favorite status
      if (favoriteProducts.includes(id)) {
        // Remove from favorites
        setFavoriteProducts(favoriteProducts.filter((productId) => productId !== id));
      } else {
        // Add to favorites
        setFavoriteProducts([...favoriteProducts, id]);
      }
      ///////////////////////////////////////////////////////////////
      const body = {
        owner: decodedToken.user_id,
        Product: id,
        owner_name: decodedToken.username,
      }
      createResource_fav(body)
    }
    else {
      showAlert("please log in first");
    }
  }


  const [products, setproducts] = useState()
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
  }, []);





  return (

    <section className="featured-products">
      {alertMessage && (
        <div className={`alert ${alertType === 'success' ? 'alert-success' : ''}`}>
          {alertMessage}
        </div>
      )}
      <h2 className='text1'>Featured Products</h2>
      <hr />
      <div className="product-list">


        {products ? products.slice(0, 30).map(product => (

          <div key={product.id} className="product" onClick={() => handleProductId(product.id)}>
            <Link className='productde' href="/productDetails">
              <Image src={product.image} width='200' height='200' />
            </Link>
            <div className='h_p_h'>
              <div>
                <h3>{product.Title}</h3>
                <p>Price: {product.price} J</p>
              </div>





              <div
                key={product.id}
                onClick={() => handleAddToFav(product.id)}
                className={`buttonAddH ${favoriteProducts.includes(product.id) ? 'clicked' : ''}`}
              >
                <svg

                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill={favoriteProducts.includes(product.id) ? 'red' : 'black'}
                  width="25"
                  height="25"
                >
                  <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                </svg>
              </div>





            </div>

          </div>

        )) : ""}

      </div>

    </section>
  );
}


export default FeaturedProducts;


