import React from 'react';
import './CreateButton.css';

function CreateButton() {

    //Función en la que damos la acción del evento del usuario
    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <button className="CreateButton"
        //Se debe envolver en una arrowfunction para ejecutar la función creada
        //Si no la envolvemos no se ejecuta cuando damos click sino cuando se abra la página
            onClick={() => onClickButton('Aquí deberia aparecer el modal')}
        >
            +
        </button>
    )
}

export { CreateButton };