import React, { useEffect, useState } from 'react'
import { MenuContext } from '../Context/MenuContext'
import { useContext } from 'react'
import { getDataUserForAuth } from '../services/Api';
import Select from '../Select/Select';
import MealsOfMenu from '../MealsOfMenu/MealsOfMenu';
import "./MenuList.css";
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';


function MenusList({authData, setAuthData, userData}) {

const {menusList, setMenusList} = useContext(MenuContext);
const [type, setType] = useState("");
const [day, setDay] = useState("");
const [search, setSearch] = useState("");

useEffect(() => {
  if (authData) {
  getDataUserForAuth(userData.token).then((info) => {
    console.log(info);
    setAuthData(info);
  })
}}, []);

const filteredMeals = menusList.filter((meal) => {
  if (type) {
    return meal.type === type;
  } else {
    return true;
  }
}).filter((meal) => {
  if (day) {
    return meal.day === day;
  } else {
    return true;
  }
}).filter((meal) => {
  if (search) {
    const lowerCaseString = meal.name.toLowerCase();
  return lowerCaseString.includes(search.toLowerCase());
  } else {
    return true;
  }
});

  return (
    <>
    <Header/>
    <Search search={search} setSearch={setSearch}/>
    <p className="welcome-msg">¡Hola <span className="username-msg">{userData.username}</span>!</p>
    <h2 className="page-title-list">Tus comidas</h2>
    <Select setType={setType} setDay={setDay} />
    <section className="all-meals">
    <Link className="link" to="/menuform">
        <article className="add-article">
          <div className="symbol-container">
            <p className="symbol">+</p>
          </div>
          <p className="text-symbol">Añadir comida</p>
        </article>
        </Link>
        {filteredMeals.map((meal) => ( 
          <MealsOfMenu key={meal.id} meal={meal} />
        ))}
    </section> 
    </>
  )
}


export default MenusList