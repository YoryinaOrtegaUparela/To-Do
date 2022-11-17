import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, OpenModal, setOpenModal } = React.useContext(TodoContext);
    
    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = ()=>{
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>....</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            placeholder="Cortar cebolla para el almuerzo"
            />
            <div>
                <button 
                onClick={onCancel}
                type="button"
                >
                    Cancelar
                </button>
                <button 
                type="submit"
                >
                    Añadir ToDo
                </button>
            </div>
        </form>
    );
}

export {TodoForm};