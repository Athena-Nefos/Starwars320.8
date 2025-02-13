// src/components/StarshipCard.jsx

import React from "react";
import "./StarshipCard.css"; // Create this CSS file for styling

function StarshipCard({ name }) {
    return (
    <div className="starship-card">
        <h2>{name}</h2>
    </div>
    );
}

export default StarshipCard;