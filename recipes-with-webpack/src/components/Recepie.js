import React, { Component } from 'react';
import Instructions from './Instructions';
import IngredientList from './IngredientList';

export default class Receipe extends Component {
  render() {
    const {steps, name, ingredients} = this.props.receipe;
    return (
      <section>
        <h1>{name}</h1>
        <IngredientList ingredients={ingredients}> </IngredientList>
        <Instructions steps={steps}></Instructions>
      </section>
    )
  }
}
