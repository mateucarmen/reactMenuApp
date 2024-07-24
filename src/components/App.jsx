import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Login/Login"
import MenusList from "./MenusList/MenusList"
import MenuForm from "./MenuForm/MenuForm"
import NotFound from "./NotFound/NotFound"
import AuthRoutes from "./AuthRoutes/AuthRoutes"
import { useState } from "react"
import { MenuContext, useMenuContext } from "./Context/MenuContext"
import Logout from "./Logout/Logout"
import Detail from "./Detail/Detail"



function App() {

  const dataLocal = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(dataLocal);
  const [authData, setAuthData] = useState(null);
  const menuContext = useMenuContext();
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (userData) {
      return navigate("/menuslist");
    }
  };
  
  return (
    <>
    <div className="top-web">
      <h1 onClick={handleClick} className="web-title">Menu Project</h1>
      <p className="signature">Por Carmen Mateu</p>
    </div>
    <MenuContext.Provider value={menuContext}>
    <Routes>
      <Route 
      path="/"
      element={<Login setUserData={setUserData} />}/>
      <Route 
      path="/logout"
      element={<Logout setUserData={setUserData} userData={userData} authData={authData} setAuthData={setAuthData}/>} />
      <Route 
      path="/menuslist"
      element={
      <AuthRoutes 
      user={userData} 
      component={
      <>
      <MenusList userData={userData} authData={authData} setAuthData={setAuthData}/>
      </>
    } /> 
      }/>
      <Route 
      path="/menuform"
      element={
      <AuthRoutes 
      user={userData} 
      component={<MenuForm userData={userData} authData={authData} setAuthData={setAuthData}/>}/> 
      }/>
      <Route 
      path="/detail/:idMeal"
      element={
      <AuthRoutes 
      user={userData}
      component={<Detail userData={userData} authData={authData} setAuthData={setAuthData}/>}
      />
      }
      />
      <Route 
      path="*"
      element={<NotFound />}/>    
    </Routes>
    </MenuContext.Provider>
    </>
  )
}

export default App
