import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({name, cuisine, photo, ingredients, preparation});
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" required={true}/>
            </td>
            <td>
              <input type="text" name="cuisine" onChange={(e) => setCuisine(e.target.value)} value={cuisine} placeholder="Cuisine"/>
            </td>
            <td>
              <input type="url" name="photo" onChange={(e) => setPhoto(e.target.value)} value={photo} placeholder="URL"/>
            </td>
            <td>
              <textarea name="ingredients" onChange={(e) => setIngredients(e.target.value)} value={ingredients} placeholder="Ingredients"/>
            </td>
            <td>
              <textarea name="preparation" onChange={(e) => setPreparation(e.target.value)} value={preparation} placeholder="Preparation"/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
