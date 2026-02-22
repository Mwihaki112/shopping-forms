import React, { useState } from "react";
import styles from '../styles/FlowerForm.module.css';

const FlowerForm = ({ onAddFlower }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Bouquet');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    onAddFlower({ name, category, price: parseFloat(price) });
    setName('');
    setCategory('Bouquet');
    setPrice('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="Flower Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Bouquet">Bouquet</option>
        <option value="Seasonal">Seasonal</option>
        <option value="Basket">Basket</option>
        <option value="Posy">Posy</option>
      </select>
      <button type="submit">Add Flower</button>
    </form>
  );
};

export default FlowerForm;