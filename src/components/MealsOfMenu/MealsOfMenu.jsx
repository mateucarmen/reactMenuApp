
import { Link } from "react-router-dom";
import "./MealsOfMenu.css"

function MealsOfMenu({ meal }) {

const img = meal.img 
? meal.img 
: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4mSKMHor6XghOdHk0vPCzS6FWfD2JZocbw&s";

  return (
    <>
        <Link to={`/detail/${meal.id}`}>
        <article className="meal-item">     
            <figure>
              <img src={img} />
            </figure>   
            <h3 className="title">{meal.name}</h3>
        </article>
        </Link>
    </>
  )
}

export default MealsOfMenu