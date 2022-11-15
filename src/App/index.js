import React from 'react';
import { AppUI } from './AppUI';
// import './App.css';


const defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "tomar el curso", completed: false },
  { text: "llorar", completed: false },
  { text: "saludar", completed: true }
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if (!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })

  }

  //Funcion para marcar los TODOS completados, recibe el texto que contiene el todo
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex] = {
      text: newTodos[todoIndex].text,
      completed: true
    };
    setTodos(newTodos);
  }

  //Funcion para eliminar el TODO, recibe el texto que contiene el todo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchTodos = {searchTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
