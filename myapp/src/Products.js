// Reading API

import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import useFetch from 'react-fetch-hook';

function Product(){

    const url = `https://60df3c6fabbdd9001722d337.mockapi.io/api/v1/products/1`;
    const[product, setProduct] = useState(null)

    let content = null

   useEffect(() => {
        axios.get(url)
    .then(response => {
        setProduct(response.data)
    }) 
} , [url])

if(product) {
     content = 
     <div>
         <h1>{product.name}</h1>
         <img src={product.avatar} />
        <img src={product.image} />
        <p>{product.description}</p>

     </div>
    
}

    return (
        <div>
            {content}
        </div>
    )
    
}


export default Product;
