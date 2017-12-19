import React, { Component } from 'react';
import Ingredient from './Ingredient';

export default class IngredientList extends Component {
  render() {
    return (
      <ul>
        {this.props.ingredients.map((ingredient, index) => <Ingredient ingredient={ingredient} key={index}></Ingredient>)}
      </ul>
    );
  }
}
