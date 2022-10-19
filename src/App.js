import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateButton } from './CreateButton';
// import './App.css';


const todos = [
  { text: "cortar cebolla", completed: false },
  { text: "tomar el curso", completed: false },
  { text: "llorar", completed: false },
  { text: "saludar", completed: true }
]

function App() {
  return (
    <React.Fragment>

    <TodoCounter />
    <TodoSearch />

    <TodoList>
      {todos.map(todo => (
        <TodoItem 
        key={todo.text}
        text={todo.text}
        completed={todo.completed}
        />
        )
        )
      }
      </TodoList>
    <CreateButton />


    </React.Fragment>
  );
}

export default App;
