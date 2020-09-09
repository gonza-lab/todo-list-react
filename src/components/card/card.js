import React, { Component } from 'react';
import Modificable from '../modificable/modificable.js';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e, this.props.task.id);
  }

  render() {
    const { description } = this.props.task;
    return (
      <div className="card">
        <Modificable value={description} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Card;
