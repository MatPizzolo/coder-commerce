import React, { useState, useEffect } from "react";


export default function ItemCount({ stock, initial }) {
  const [unidades, unidadesAddRemove] = useState(0);

  function addClick() {
    unidadesAddRemove(unidades + 1);
  }

  function removeClick() {
    unidadesAddRemove(unidades - 1);
  }

  function unitsInitial() {
    unidadesAddRemove(unidades + initial);
  }

  useEffect(() => {
    unitsInitial();
  }, []);

  console.log(unidades);
  console.log(stock);

  function onAdd(cuantos) {
    //envia la cantidad de productos que quiere el usuario
    cuantos = unidades;
    console.log(cuantos);
  }

  if (stock <= 0) {
    return (
      <>
        <button onClick={addClick} disabled>
          Agrega{" "}
        </button>
        <button onClick={removeClick} disabled>
          Saca{" "}
        </button>

        <h1>Cantidad: No hay stock</h1>
        <button disabled>Comprar </button>
      </>
    );
  } else if (stock === unidades) {
    return (
      <>
        <button onClick={addClick} disabled>
          Agrega{" "}
        </button>
        <button onClick={removeClick}>Saca </button>

        <h1>Cantidad: {unidades}</h1>
        <h2>No hay mas stock</h2>
        <button onClick={onAdd}> Comprar </button>
      </>
    );
   } 
  else if(unidades === 0){
        return (
      <>
        <button onClick={addClick} >
          Agrega{" "}
        </button>
        <button onClick={removeClick} disabled>Saca </button>

        <h1>Cantidad: {unidades}</h1>
        <button onClick={onAdd} disabled> Comprar </button>
      </>
    );
   }
    else {
    return (
      <>
        <button onClick={addClick}>Agrega </button>
        <button onClick={removeClick}>Saca </button>

        <h1>Cantidad: {unidades}</h1>
        <button onClick={onAdd}> Comprar </button>
      </>
    );
  }
}
