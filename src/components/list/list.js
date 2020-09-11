import React, { Component } from 'react';
import Card from '../card/card.js';
import Modificable from '../modificable/modificable.js';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.handleChangeCard = this.handleChangeCard.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.state = {
      isNewCard: false,
    };
  }

  handleChangeCard(e, idCard) {
    const { list } = this.props;
    const index = list.tasks.findIndex((task) => {
      return task.id === idCard;
    });

    list.tasks[index].description = e.target.value;
    this.props.onChange(list);
  }

  handleChangeTitle(e) {
    const { list } = this.props;
    list.title = e.target.value;
    this.props.onChange(list);
  }

  addCard() {
    const { list } = this.props;
    const lastCard = list.tasks[list.tasks.length - 1];
    const lastId = lastCard ? lastCard.id : 0;

    list.tasks.push({
      id: lastId + 1,
      description: '',
    });
    this.props.onChange(list);
    this.toggleIsNewCad();
  }

  toggleIsNewCad() {
    this.setState({
      isNewCard: true,
    });
  }

  deleteList() {
    this.props.onDelete(this.props.list.id);
  }

  deleteCard(idDelete) {
    const { list } = this.props;
    const index = list.tasks.findIndex((card) => {
      return card.id === idDelete;
    });

    list.tasks.splice(index, 1);
    this.props.onChange(list);
  }

  render() {
    const { id, title, tasks } = this.props.list;
    const { isNewCard } = this.state;
    const lastIndex = tasks.length - 1;
    return (
      <div className="list">
        <Modificable
          className="list-title"
          value={title}
          onChange={this.handleChangeTitle}
        />
        <div className="container-cards">
          {tasks.map((task, index) => (
            <Card
              key={task.id}
              task={task}
              blur={index === lastIndex && isNewCard}
              onChange={this.handleChangeCard}
              onDelete={this.deleteCard}
            />
          ))}
        </div>
        <input
          onClick={this.addCard}
          className="addCard"
          value="+ Añadir tarea"
          type="button"
        />
        <input
          onClick={this.deleteList}
          className="deleteList"
          value="X"
          type="button"
        />
      </div>
    );
  }
}

export default List;
