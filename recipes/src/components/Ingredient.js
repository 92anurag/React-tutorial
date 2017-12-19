import React, { Component } from 'react';

export default class Ingredient extends Component {
  render() {
    const {ingredient} = this.props;
    return (
      <div className="ingredient">
        <span>{ingredient.name}</span>
        <span>{ingredient.amount}</span>
        <span>{ingredient.measurement}</span>
      </div>
    );
  }
}
