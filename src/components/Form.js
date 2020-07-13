import React from "react";

function Form({ getRecipe }) {
  return (
    <form onSubmit={getRecipe} style={{ marginBottom: "2rem" }}>
      <input type="text" name="recipeName" className="form__input" />
      <button className="form__button">Search</button>
    </form>
  );
}

export default Form;
