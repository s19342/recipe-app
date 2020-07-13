import React from "react";
import { Link } from "react-router-dom";

function Recipes({ recipes }) {
  return (
    <div className="container">
      <div className="row">
        {recipes.map((recipe) => {
          return (
            <div
              className="col-md-4"
              key={recipe.show.id}
              style={{ marginBottom: "2rem" }}
            >
              <div className="recipes__box">
                {recipe.show.image ? (
                  <img
                    src={recipe.show.image.original}
                    alt={recipe.show.name}
                    className="recipe__box-img"
                  />
                ) : (
                  <img
                    src="https://geodis.com/br/sites/default/files/styles/max_800x800/public/2018-06/404.png?itok=wFu6QRrj"
                    alt={recipe.show.name}
                    className="recipe__box-img"
                  />
                )}
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {recipe.show.name.length < 20
                      ? `${recipe.show.name}`
                      : `${recipe.show.name.substring(0, 25)}...`}
                  </h5>
                  <p className="recipes__subtitle">
                    Network:
                    {recipe.show.network ? (
                      <span>{recipe.show.network.name}</span>
                    ) : (
                      <span>Unknown</span>
                    )}
                  </p>
                  <button className="recipe_buttons">
                    <Link
                      to={{
                        pathname: `/recipe/${recipe.show.id}`,
                        state: { recipe: recipe.show.name },
                      }}
                    >
                      Description
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
