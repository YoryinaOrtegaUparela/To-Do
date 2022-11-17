import React from "react";

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

  export {useLocalStorage};