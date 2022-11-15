import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateButton } from '../CreateButton';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos, 
    searchValue,
    setSearchValue, 
    searchTodos,
    completeTodo ,
    deleteTodo,
}) {

    return (
        <React.Fragment>

            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
            {error && <p>Hubo un error...</p>}
            {loading && <p>Estamos cargando...</p>}
            {(!loading && !searchTodos.length) && <p>Crea tu primer To Do</p>}

                {searchTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )
                )
                }
            </TodoList>


            <CreateButton />

        </React.Fragment>
    );
}

export { AppUI };
