
import { useEffect, useState } from "react";
import Product from './Product.jsx'
import './ProductsList.css'
function ProductsList() { 
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>setProducts(data))

  },[]  )
  return (
 <>
 
 <h2 className="text-center p-3" > Our Products </h2>
      <div className="Container">
<div className='row'>
{products.map((product)=>{
  return(
     <div className='col-3'key={product.id}>
    <Product  product={product}/>
    </div>
  ) 
})}
 </div>
 </div>
 </>
  )
}

export default ProductsList