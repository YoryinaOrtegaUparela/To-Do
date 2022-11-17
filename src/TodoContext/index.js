import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('todos_v1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

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

  //Funcion para crear todo
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text
    });
    saveTodos(newTodos);
  }

  //Funcion para marcar los TODOS completados, recibe el texto que contiene el todo
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex] = {
      text: newTodos[todoIndex].text,
      completed: true
    };
    saveTodos(newTodos);
  }

  // console.log('antes del use effect')
  // //Herramienta hook: UseEfecct-ejecuta el codigo que tiene justo antes de renderizar el codigo
  // //El segundo parametro [] le indica cuando ejecutarse
  // React.useEffect( () => {
  //   console.log('use effect')
  // }, [totalTodos])

  // console.log('después del use effect')

  //Funcion para eliminar el TODO, recibe el texto que contiene el todo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo

    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };