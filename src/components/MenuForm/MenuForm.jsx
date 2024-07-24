import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { addMeal } from '../services/MenuServices'; 
import { useContext } from 'react';
import { MenuContext } from '../Context/MenuContext';
import { getDataUserForAuth } from '../services/Api';
import Header from '../Header/Header';
import "./MenuForm.css"

function MenuForm({userData, authData, setAuthDAta}) {

    const [newMeal, setNewMeal] = useState({
        name: "",
        type: "",
        img: "",
        description: "",
        day: "",
        week: "",
        id: ""
    });

    const {getMeal} = useContext(MenuContext);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (authData) {
        getDataUserForAuth(userData.token).then((info) => {
          console.log(info);
          setAuthDAta(info);
        })
      }}, []);

    const handleChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setNewMeal({...newMeal, [id]: value});
    };

    const handleSubmit = (e) => { 
        e.preventDefault();
        addMeal(newMeal, getMeal);
        e.target.reset();
        navigate("/menuslist");
    };

  return (
    <>
    <Header />
    <div className="form-container">
    <h2 className="page-title">Añadir comida</h2>
    <p className="form-text">Añade una nueva comida a tu lista e inclúyela en tu planificación de menús. Si lo prefieres, vuelve a <Link to="/menuslist" className="link">tus comidas.</Link> </p>
    <form className="new-meal-form" onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="day">Día de la semana</label>
                <select id="day" value={newMeal.day} onChange={handleChange} >
                    <option value="">Selecciona un día</option>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miércoles">Miércoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sábado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                </select>
        </fieldset>
        <fieldset>
            <label htmlFor="type">Tipo de comida</label>
                <select id="type" value={newMeal.type} onChange={handleChange}>
                    <option value="">Selecciona un tipo</option>
                    <option value="Desayuno">Desayuno</option>
                    <option value="Comida">Comida</option>
                    <option value="Cena">Cena</option>
                </select>
        </fieldset>
        <fieldset>
            <label htmlFor="name">Nombre de la comida:</label>
            <input type="text" id="name" value={newMeal.name} onChange={handleChange}/>
        </fieldset>
        <fieldset>
            <label htmlFor="description">Descripción:</label>
            <textarea name="description" id="description" value={newMeal.description} onChange={handleChange}></textarea>
        </fieldset>
        <fieldset>
            <label htmlFor="img">URL de la imagen:</label>
            <input type="text" id="img" value={newMeal.img} onChange={handleChange}/>
        </fieldset>
        <button className="new-meal-btn">Crear</button>
    </form>
    </div>
    </>
  )
}

export default MenuForm