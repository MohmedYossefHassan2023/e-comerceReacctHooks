import React from 'react'
import  './product.css'

function Product(props) {
  const {product}=props
  return (
    <div className="card">
    <img src={product.image} className="card-img-top" alt={product.title} />
  <div className="card-body">
  <h5 className="card-title">{product.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button  className="btn btn-primary">Go somewhere</button>
  </div>
</div>
  )
}

export default Product