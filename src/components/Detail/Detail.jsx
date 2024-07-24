import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MenuContext } from '../Context/MenuContext';
import { deleteMeal } from '../services/MenuServices';
import Header from '../Header/Header';
import "./Detail.css"

function Detail() {

const {idMeal} = useParams();
const { menusList, getMeal } = useContext(MenuContext);
const clickedMeal = menusList.find((meal) => { return meal.id === idMeal });
const navigate = useNavigate();

const img = clickedMeal.img 
? clickedMeal.img
: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4mSKMHor6XghOdHk0vPCzS6FWfD2JZocbw&s";

const handleDelete = (e) => {
    const id = e.target.id;
    deleteMeal(id).then((data) => {
      getMeal();
      navigate("/menuslist")
    });
  };



  return (
    <> 
    <Header />
    <div className="detail-container">
        <p className="detail-day">{clickedMeal.day} / {clickedMeal.type}</p>
        <h2 className="detail-name">{clickedMeal.name}</h2>
        <p className="detail-description">{clickedMeal.description}</p>
        <figure className="detail-figure">
            <img className="detail-img" src={img} alt={clickedMeal.name} />
        </figure>
    </div>
    <div className="options-container">
        <Link to="/menuslist" className="return-link"><button className="option-btn">Volver a todas las comidas</button></Link>
        <button id={clickedMeal.id} onClick={handleDelete} className="option-btn">Eliminar comida</button>
    </div>
    </>
  )
}

export default Detail