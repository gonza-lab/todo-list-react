import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home.js';
import './style.css';

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

if(!localStorage.lists){
  localStorage.lists = listsLocal;
}

ReactDOM.render(<Home />, document.getElementById('root'));
