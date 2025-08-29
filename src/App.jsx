import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import RecipeChart from "./components/RecipeChart";

// No API key needed for TheMealDB!

function App() {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filters, setFilters] = useState({
    area: "", // Italian, Chinese, etc.
    category: "", // Chicken, Vegetarian, etc.
    ingredient: "", // Filter by main ingredient
    searchInput: "",
  });

  const updateFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType] === value ? "" : value,
    }));
  };

  const applyFilters = async () => {
    let url = "";

    // TheMealDB API endpoints
    if (filters.searchInput) {
      // Search by name
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${filters.searchInput}`;
    } else if (filters.area) {
      // Filter by cuisine/area
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filters.area}`;
    } else if (filters.category) {
      // Filter by category
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filters.category}`;
    } else if (filters.ingredient) {
      // Filter by main ingredient
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filters.ingredient}`;
    } else {
      // Default: get some random recipes
      url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;
    }

    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    setList(json);

    // TheMealDB returns data in 'meals' array instead of 'results'
    if (json.meals) {
      setFilteredResults(json.meals);
    } else {
      setFilteredResults([]);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const searchItems = (inputString) => {
    updateFilter("searchInput", inputString);
    // TheMealDB handles search via API, so we don't need to filter locally
  };

  const FilterButton = ({ filterType, value, label }) => (
    <button
      className="filter-button"
      onClick={() => updateFilter(filterType, value)}
    >
      {label} {filters[filterType] === value ? "✓" : ""}
    </button>
  );

  // Extract ids from data to supply it as prop to RecipeChart component
  const getRecipeIds = () => {
    const data =
      filteredResults.length > 0
        ? filteredResults
        : list && list.meals
        ? list.meals
        : [];
    return data.map((recipe) => recipe.idMeal);
  };

  return (
    <div className="whole-page">
      <h1>Recipe Dashboard - Powered by TheMealDB</h1>

      <div className="search-and-filters">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
          value={filters.searchInput}
        />

        <div className="filter-buttons">
          <FilterButton
            filterType="area"
            value="Italian"
            label="Italian Cuisine"
          />
          <FilterButton
            filterType="category"
            value="Vegetarian"
            label="Vegetarian"
          />
          <FilterButton
            filterType="category"
            value="Chicken"
            label="Chicken Recipes"
          />
          <FilterButton
            filterType="ingredient"
            value="chicken"
            label="Chicken Ingredient"
          />
        </div>
      </div>

      <ul className="recipe-list">
        {(filteredResults.length > 0
          ? filteredResults
          : list && list.meals
          ? list.meals
          : []
        ).map((recipe) => (
          <li key={recipe.idMeal} className="recipe-card">
            <Link to={`/recipeDetail/${recipe.idMeal}`}>
              <p>
                {recipe.strMeal} <span>({recipe.idMeal})</span>
              </p>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                loading="lazy"
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Always show the count of results */}
      <p>
        {filteredResults.length > 0
          ? `Total Number of Results: ${filteredResults.length}`
          : "No Results Found"}
      </p>
      <RecipeChart recipeIds={getRecipeIds()} />
    </div>
  );
}

export default App;
