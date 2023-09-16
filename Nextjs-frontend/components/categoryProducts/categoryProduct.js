import { useState,useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from 'next/image'
import useResource from "hooks/useResource";


export default function CategoryProduct({decodedToken}){

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
    }, []);   
    
    
    
    const [categoryId, setcategoryId] = useState()
    const [category_type, setcategory_type] = useState()
    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            setcategoryId(JSON.parse(localStorage.getItem('categoryId')))
            setcategory_type(localStorage.getItem('category_type'))
        }
    }, []);



      
    function handleProductId(id){
      localStorage.setItem("productId",id)
      
    }


  
  // useEffect(() => {
  //     if (typeof window !== 'undefined' && window.localStorage) {
  //       setFavoriteProducts(localStorage.getItem('favoriteProducts'))
  //     }
  // }, []);

  
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const createResource_fav = useResource("Favourite_product").createResource
  function handleAddToFav(id) {
    
    if (decodedToken){
    ////////////////
    // console.log(777777777,decodedToken.user_id)
    if (favoriteProducts.includes(id)) {
      // Remove from favorites
      setFavoriteProducts(favoriteProducts.filter((productId) => productId !== id));
      // localStorage.setItem('favoriteProducts',favoriteProducts)
    } else {
      // Add to favorites
      setFavoriteProducts([...favoriteProducts, id]);
      // localStorage.setItem('favoriteProducts',favoriteProducts)
    }
    ////////////////
    const body = {
      owner: decodedToken.user_id,
      Product: id,
      owner_name: decodedToken.username,
    }
    createResource_fav(body)
    }
    else{
      showAlert("please log in first");
    }
    
  }
    
    
    return(
        
      
      
      <div className="categoryProducts">
      {alertMessage && (
        <div className={`alert ${alertType === 'success' ? 'alert-success' : ''}`}>
          {alertMessage}
        </div>
      )}
      <h2>{category_type}</h2>
      <hr className="categoryProductsLine"/>
      <div className="product-list">
        {/* {console.log(6666666,fetchResource().then(response=>{console.log(77777,response)}))} */}
        {/* {console.log(555555,products)} */}
        {products ? products.map(product => product.category == categoryId ? ( 
          <div key={product.id} className="product" onClick={()=>handleProductId(product.id)}>
          <Link className='productde' href="/productDetails">
            <Image src={product.image}  width='200' height='200' />
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



        ) : '') : ""}
        
      </div>
      </div>

  
    )
}