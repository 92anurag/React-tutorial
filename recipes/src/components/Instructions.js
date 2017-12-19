import React, { Component } from 'react';
import './Instructions.css';

export default class Instructions extends Component {
  render() {
    return (
      <section className="instructions">
        <h1>{this.props.title}</h1>
        {this.props.steps.map((step, index) => <p key={index}> {step} </p>)}
      </section>
    );
  }
}
