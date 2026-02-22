import React from "react";
import FlowerCard from "./FlowerCard.jsx";
import '../styles/FlowerList.css';

const FlowerList = ({ flowers }) => {
  if (flowers.length === 0) return <p>No flowers match your search.</p>;

  return (
    <div className="flowerList">
      {flowers.map(flower => (
        <FlowerCard key={flower.id} flower={flower} />
      ))}
    </div>
  );
};

export default FlowerList;