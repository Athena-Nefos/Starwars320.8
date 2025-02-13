import { useState, useEffect } from 'react';
import{Routes, Route} from 'react-router-dom';
import { getAllStarships } from "./services/sw-api"; //imports api
import StarshipCard from "./components/StarshipCard"; 
import './App.css';

function App() {
  const [starships, setStarships] = useState([]); //Stores fetched starships

  useEffect(() => {
    async function fetchStarships() {
      const ships = await getAllStarships();
      setStarships(ships);
    }
    fetchStarships();
  }, []);

  return (
    <>
      <h1> Main Page </h1>

      <Routes>
        {/* Define routes here if you have additional pages */}
        <Route path="/" element={
          <div className="starship-container">
            {starships.length > 0 ? (
              starships.map((ship, index) => (
                <StarshipCard key={index} name={ship.name} />
              ))
            ) : (
              <p>Loading starships...</p>
            )}
          </div>
        }
        />
      </Routes>
    </>
  );
}

export default App
