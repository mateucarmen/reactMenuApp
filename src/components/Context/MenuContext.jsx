import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const useMenuContext = () => {

    const [menusList, setMenusList] = useState([]);

    const getMeal = () => {
        fetch("https://668c2a860b61b8d23b0ca041.mockapi.io/app/meals")
          .then((response) => response.json())
          .then((data) => {
            setMenusList(data);
          });
      };

      useEffect(() => {
        getMeal();
      }, []); 
    
      return { menusList, getMeal };

    }

