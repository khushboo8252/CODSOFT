import React from 'react';
import styles from './productCard.module.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({id, name,image, description, price}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.card} style={{display:"flex"}}>
      <div><img src={image} alt={name}/></div>
      <div>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <h2>Rs. {price}</h2>
        <button onClick={() => navigate(`/products/${id}`)}>View Details</button>
        <button>Add to Card</button>
      </div>

    </div>
  )
}

export default ProductCard;