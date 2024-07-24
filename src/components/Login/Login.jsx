import React, { useState } from 'react'
import {getDataFromApiUser} from '../services/Api';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const INITAL_STATE = {
  username: "",
  password: "",
};

function Login({ setUserData}) {

  const [user, setUser] = useState({INITAL_STATE});
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const handleInput = (e) => {
    setUser({...user, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getDataFromApiUser(user)
    .then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem("user", JSON.stringify(data));
        setUserData(data);
        navigate("/menuslist")
      } else {
        setLoginError("Los datos no son correctos")
      }
    })
  };


  return (
    <>
    <h2 className="form-title">Iniciar sesión</h2>
    <p className="form-instructions">Para utilizar esta App necesitas iniciar sesión con estas credenciales:</p>
    <ul className="login-data">
        <li>Usuario: emilys</li>
        <li>Contraseña: emilyspass</li>
    </ul>
    <form className="login-form" onChange={handleInput} onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Usuario</label>
          <input id="username" type="text" name="username" value={user.username} />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" name="password" value={user.password}/>
        </fieldset>
      <p className={loginError ? "error-message" : "no-error"}>{loginError}</p>
      <button className="login-btn">Iniciar sesión</button>
    </form>
    </>
  )
}

export default Login