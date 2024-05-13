import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './components/Card';

const App = () => {
  const [mealsData, setMealsData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
   console.log('test');
      axios
          .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch)
          .then((res) => setMealsData(res.data.meals));
  }, [inputSearch]); 
  // les crochets, c'est pour le callback, pour éviter que le useEffect se joue continuellement (on le voit à l'aide du console.log, le test s'incrémente continuellement)

  return (
      <div className="app-container">
          <h1>React Cooking App</h1>
          <input 
              type="text"
              placeholder="Tapez le nom d'un aliment (en anglais)"
              onChange={(e) => setInputSearch(e.target.value)}
          />
          <div className="meals-container">
              {/* {mealsData.map((meal) => <h2>{meal.strMeal}</h2>)} */}
              {mealsData && mealsData
                  .slice(0, 24)
                  .map((meal) => <Card key={meal.idMeal} meal={meal} />)
              }
          </div>
      </div>
  );
};

export default App;
