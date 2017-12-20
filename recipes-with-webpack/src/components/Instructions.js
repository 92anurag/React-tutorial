import React, { Component } from 'react';
import './Instructions.css';

export default class Instructions extends Component {
  render() {
    return (
      <section className="instructions">
        <h2>Cooking Instructions</h2>
        {this.props.steps.map((step, index) => <p key={index}> {step} </p>)}
      </section>
    );
  }
}
