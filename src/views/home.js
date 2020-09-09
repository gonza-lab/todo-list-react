import React, { Component } from 'react';
import List from '../components/list/list.js';
import './home.css';

const listsLocal = [
  {
    id: 0,
    title: 'Tareas del colegio',
    tasks: [
      { id: 0, description: 'Terminar tarea de matematicas' },
      {
        id: 1,
        description: 'Terminar tarea de Practicas del lenguaje y enviarla',
      },
      { id: 2, description: 'Terminar de hacer el proyecto' },
    ],
  },
  {
    id: 1,
    title: 'Que haceres de la casa',
    tasks: [
      { id: 0, description: 'Limpiar la pieza' },
      { id: 1, description: 'Comprar las frutas' },
      { id: 2, description: 'Lavar los platos' },
    ],
  },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: listsLocal,
    };
    this.handleChangeList = this.handleChangeList.bind(this);
  }

  handleChangeList(list) {
    const idList = list.id;
    const { lists } = this.state;
    const index = lists.findIndex((list) => {
      return (list.id === idList);
    });
    console.log(index);
    lists[index] = list;

    this.setState({ lists });
  }

  render() {
    const { lists } = this.state;
    return (
      <main>
        {lists.map((list) => (
          <List key={list.id} list={list} onChange={this.handleChangeList} />
        ))}
      </main>
    );
  }
}

export default Home;
