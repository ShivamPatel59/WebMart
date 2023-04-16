import React from 'react'
import {Link} from "react-router-dom"
import ReactStars from "react-rating-stars-component"


const Product = ({product}) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "gold",
    size: (window.innerWidth < 600) ? 20 : 25,
    value: product.rating,
    isHalf: true,
    }
  return (
    <div>
        <Link className='productCard' to={`/product/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <span>{product.name}</span>
            <div>
                <ReactStars {...options} /> 
            </div>
            <span>({product.numOfReviews} Reviews)</span>
            <span>{`₹${product.price}`}</span>
        </Link>
    </div>
  )
}

export default Product