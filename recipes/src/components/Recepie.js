import React, { Component } from 'react';
import Instructions from './Instructions';
import IngredientList from './IngredientList';

export default class Receipe extends Component {
  render() {
    const {steps, name, ingredients} = this.props.receipe;
    return (
      <section>
        <Instructions title={name} steps={steps}></Instructions>
        <IngredientList ingredients={ingredients}> </IngredientList>
      </section>
    )
  }
}
