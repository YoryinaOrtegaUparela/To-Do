import React from 'react';
import './CreateButton.css';

function CreateButton(){

    const onClickButton = (msg)=> {
    alert(msg);
    }
    return (
        <button className="CreateTodoButton"
        onClick={()=>onClickButton('Aquí deberia aparecer el modal')}
        >
            +
            </button>
    )
}

export { CreateButton };