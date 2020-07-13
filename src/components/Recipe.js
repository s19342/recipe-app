import React from "react";

import { Link } from "react-router-dom";

class Recipe extends React.Component {
  state = {
    activeRecipe: [],
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`http://api.tvmaze.com/search/shows?q=${title}`);

    const res = await req.json();

    this.setState({ activeRecipe: res[0] });
  };

  render() {
    const recipe = this.state.activeRecipe;

    console.log(recipe);

    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            {recipe.show.image ? (
              <img
                src={recipe.show.image.original}
                alt={recipe.show.name}
                className="active-recipe__img"
              />
            ) : (
              <img
                src="https://geodis.com/br/sites/default/files/styles/max_800x800/public/2018-06/404.png?itok=wFu6QRrj"
                alt={recipe.show.name}
                className="active-recipe__img"
              />
            )}
            <h3 className="active-recipe__title">{recipe.show.name}</h3>
            <h4 className="active-recipe__publisher">
              Network:
              {recipe.show.network ? (
                <span>{recipe.show.network.name}</span>
              ) : (
                <span>Unknown</span>
              )}
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                {recipe.show.officialSite ? (
                  <a href={recipe.show.officialSite}>
                    {recipe.show.officialSite}
                  </a>
                ) : (
                  <a href={recipe.show.url}>{recipe.show.url}</a>
                )}
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
