import React from 'react';
import './CreateButton.css';

function CreateButton(props) {

    //Función en la que damos la acción del evento del usuario
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return (
        <button className="CreateButton"
        //Se debe envolver en una arrowfunction para ejecutar la función creada
        //Si no la envolvemos no se ejecuta cuando damos click sino cuando se abra la página
            onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateButton };