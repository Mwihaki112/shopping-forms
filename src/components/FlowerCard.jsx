import React from "react";
import styles from '../styles/FlowerCard.module.css';

const FlowerCard = ({ flower }) => {
  return (
    <div className={styles.card}>
      <h3>{flower.name}</h3>
      <p>Category: {flower.category}</p>
      <p>Price: KES{flower.price}</p>
    </div>
  );
};

export default FlowerCard;