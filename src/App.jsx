import React, { useState } from 'react';
import FlowerList from './components/FlowerList.jsx';
import FlowerForm from './components/FlowerForm.jsx';
import './App.css';

const App = () => {
  const [flowers, setFlowers] = useState([
    { id: 1, name: "Tulip Bouquet", category: "Bouquet", price: 2500},
    { id: 2, name: "Rose Arrangement", category: "Bouquet", price: 1200 },
    { id: 3, name: "Sunflower Basket", category: "Basket", price: 2400},
    { id: 4, name: "Daisy Posy", category: "Posy", price: 800},
    { id: 5, name: "Seasonal Mix", category: "Seasonal", price: 1500},   
    { id: 6, name: "Lily Bouquet", category: "Bouquet", price: 2000 },
  ]);

  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const handleAddFlower = (newFlower) => {
    setFlowers([...flowers, { id: flowers.length + 1, ...newFlower }]);
  };

  const filteredFlowers = flowers.filter(flower => {
    const matchesSearch = flower.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = filterCategory === 'All' || flower.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <h1>Femmora Blooms </h1>

      <input
        type="text"
        placeholder="Search flowers..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Bouquet">Bouquet</option>
        <option value="Seasonal">Seasonal</option>
        <option value="Basket">Basket</option>
        <option value="Posy">Posy</option>
      </select>

      <FlowerList flowers={filteredFlowers} />
      <FlowerForm onAddFlower={handleAddFlower} />
    </div>
  );
};

export default App;