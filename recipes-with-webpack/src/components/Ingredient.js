import React, { Component } from 'react';

export default class Ingredient extends Component {
  render() {
    const {ingredient} = this.props;
    return (
      <li>
        <span>{ingredient.name}</span>
        <span>{ingredient.amount}</span>
        <span>{ingredient.measurement}</span>
      </li>
    );
  }
}
