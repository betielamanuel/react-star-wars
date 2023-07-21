import React, { useState, useEffect } from "react";
import { getAllStarships } from "./services/sw-api";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const starshipsData = await getAllStarships();
      setStarships(starshipsData);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Star Wars Starships</h1>
      <div className="starship-container">
        {starships.map((starship) => (
          <div key={starship.name} className="starship-card">
            <h2>{starship.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
