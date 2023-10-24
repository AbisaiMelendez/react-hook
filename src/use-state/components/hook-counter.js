import React, {useState} from 'react';

export const HookCounter = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(['Bye']);
  const [obj, setObject] = useState({
    email: 'abisai@user.com',
    name: 'Abisaii, melendez, bermudez',
  });

  // Modificar un objeto dentro de un array
  const [array, setArray] = useState([{name: 'John'}]);

  const updateObject = () => {
    // Actualizar el objeto utilizando una función
    setObject(prevObj => ({...prevObj, name: 'Abisai Melendez Bermudez'}));
    updateObjectTwo('name');
  };

  const updateObjectTwo = (propertyToUpdate = 'name') => {
    // Actualizar el objeto utilizando una función
    setObject(prevObj => ({
      ...prevObj,
      [propertyToUpdate]: 'amelendez', // Aquí puedes cambiar el valor deseado
    }));
  };

  const handleAddValue = () => {
    // Para ingresar un valor, debes actualizar el estado usando una función
    setList(prevList => [...prevList, 'Hello']);
  };

  const handleUpdateValue = () => {
    const updateIndex = 1;
    const newList = list.map((element, index) => {
      if (index === updateIndex) {
        return 'Good morning';
      }
      return element;
    });

    // Para actualizar un valor, debes actualizar el estado usando una función
    setList(newList);
  };

  const handleRemoveValue = () => {
    const indexToRemove = 1;
    const listCleaned = list.filter(
      (element, index) => index !== indexToRemove,
    );

    // Para limpiar la lista, debes actualizar el estado usando una función
    setList(listCleaned);
  };

  // Función para actualizar el objeto dentro del array
  const updateArrayObject = name => {
    const nameToUpdate = name;
    const newName = 'Smith';

    const newObjectArray = array.map(e => {
      if (e.name === nameToUpdate) {
        return {...e, name: newName};
      }
      return e;
    });

    setArray(newObjectArray);
  };

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <p>
        Value: Nombre: {obj.name} <br /> Correo: {obj.email}
      </p>

      <button onClick={updateObject}>
        Otra Manera de actualizar el objeto
      </button>
      <br></br>
      <button onClick={updateObject}>Actualizar el valor de un obj</button>
      <p>Actualizar el objeto dentro de un array, Nombre: {array[0].name}</p>

      <button onClick={() => updateArrayObject('John')}>
        Actualizar el objeto dentro de un array
      </button>

      <p>Clicks: {count}</p>
      <button onClick={handleClick}>Incrementar contador</button>
      <br />
      <p>String Array: {list}</p>
      <button onClick={handleAddValue}>Ingresar valor</button>
      <br />
      <button onClick={handleUpdateValue}>Actualizar valor</button>
      <br />
      <button onClick={handleRemoveValue}>Limpiar lista</button>
    </>
  );
};
