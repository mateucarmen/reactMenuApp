import React, { useState } from "react";
import "./Select.css"

function Select({setType, setDay}) {
 

    const handleSelectType = (e) => {
      setType(e.target.value);
    };

    const handleSelectDay = (e) => {
      setDay(e.target.value);
    };

  return (
    <>
    <p className="filters-title">Filtrar</p>
    <form className="filters-form">
        <label htmlFor="">Por tipo de comida:</label>
         <select className="select-type" onChange={handleSelectType}>
            <option value="">Todos</option>
            <option value="Desayuno">Desayuno</option>
            <option value="Comida">Comida</option>
            <option value="Cena">Cena</option>
         </select>
         <label htmlFor="">Por día de la semana:</label>
         <select className="select-day" onChange={handleSelectDay}>
            <option value="">Todos</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
         </select>
    </form>
    </>
  );
}

export default Select;
