import React, { Component } from 'react';
import Ingredient from './Ingredient';
import './IngredientList.css'

export default class IngredientList extends Component {
  render() {
    return (
      <div>
        <h2>Cooking Instructions</h2>
        <ul>
          {this.props.ingredients.map((ingredient, index) => <Ingredient ingredient={ingredient} key={index} className="ingredient"></Ingredient>)}
        </ul>
      </div>
    );
  }
}
