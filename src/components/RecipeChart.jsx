import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";

// No API key needed for TheMealDB!

const RecipeChart = ({ recipeIds }) => {
  const [chartData, setChartData] = useState([]);

  // Function to count non-empty ingredients in a recipe
  const countIngredients = (recipe) => {
    let count = 0;
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient && ingredient.trim() !== "") {
        count++;
      }
    }
    return count;
  };

  useEffect(() => {
    const fetchRecipeComplexity = async () => {
      const data = [];
      for (const id of recipeIds) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
          );
          const json = await response.json();
          if (json.meals && json.meals[0]) {
            const recipe = json.meals[0];
            data.push({
              id: id,
              ingredientCount: countIngredients(recipe),
            });
          }
        } catch (error) {
          console.error(`Error fetching data for recipe ${id}:`, error);
          // Add a placeholder in case of error
          data.push({ id: id, ingredientCount: 0 });
        }
      }
      setChartData(data);
    };

    if (recipeIds && recipeIds.length > 0) {
      fetchRecipeComplexity();
    }
  }, [recipeIds]);

  return (
    <div>
      {chartData.length > 0 ? (
        <div>
          <br />
          <h2>Recipe Complexity (Ingredient Count)</h2>

          <LineChart
            width={1400}
            height={400}
            data={chartData}
            margin={{
              top: 10,
              right: 70,
              left: 70,
              bottom: 100,
            }}
          >
            <Line
              type="monotone"
              dataKey="ingredientCount"
              stroke="#8884d8"
              activeDot={{ r: 5 }}
            />
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="id" interval={0} angle={20} dx={20} dy={30}>
              <Label
                value="Recipe ID"
                offset={0}
                position="insideBottom"
                dy={80}
              />
            </XAxis>

            <YAxis
              label={{
                value: "Number of Ingredients",
                angle: -90,
                position: "insideLeft",
                textAnchor: "middle",
                dy: 20,
                dx: -60,
              }}
            />
            <Tooltip />
          </LineChart>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RecipeChart;
