import React, { Component } from 'react';
import Card from '../card/card.js';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
    const { list } = this.props;
    this.state = {
      list,
    };

    this.handleChangeCard = this.handleChangeCard.bind(this);
  }

  handleChangeCard(e, idCard) {
    const { list } = this.state;
    const index = list.tasks.findIndex((task) => {
      return task.id === idCard;
    });

    list.tasks[index].description = e.target.value;
    this.props.onChange(list);
  }

  render() {
    const { title, tasks } = this.state.list;
    return (
      <div className="list">
        <h2>{title}</h2>
        <div className="container-cards">
          {tasks.map((task) => (
            <Card key={task.id} task={task} onChange={this.handleChangeCard} />
          ))}
        </div>
      </div>
    );
  }
}

export default List;
