import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateButton } from '../CreateButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
        error,
        loading,
        searchTodos,
        completeTodo,
        completedTodos,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
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

            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <CreateButton
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}

export { AppUI };
