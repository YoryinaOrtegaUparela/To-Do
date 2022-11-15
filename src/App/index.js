import React from 'react';
import { AppUI } from './AppUI';
// import './App.css';


// const defaultTodos = [
//   { text: "cortar cebolla", completed: false },
//   { text: "tomar el curso", completed: false },
//   { text: "llorar", completed: false },
//   { text: "saludar", completed: true }
// ]

//React Hook
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    
      setTimeout(() => {
        try{ //localStorage para persistencia de datos en el navegador
          const localStorageItem = localStorage.getItem(itemName);
    
          let todoItem;
    
          //Verificamos que el localStorage esté vacio
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            todoItem = initialValue;
          } else {
            todoItem = JSON.parse(localStorageItem);
          }
          setItem(todoItem);
          setLoading(false);
        } catch(error){
            setError(true);
        }
    }, 1000)
  })



  const saveItem = (newItem) => {
    try{
      const stringNewItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringNewItem)
      setItem(newItem)
    } catch(error){
      setError(true);
    }
  };
  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('todos_v1', []);
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
    <AppUI
    loading={loading}
    error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
