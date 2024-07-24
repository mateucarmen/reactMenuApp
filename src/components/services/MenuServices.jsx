const addMeal = (newMeal, getMeal) => {
    fetch("https://668c2a860b61b8d23b0ca041.mockapi.io/app/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMeal),
  })
  .then((response) => response.json())
  .then((data) => getMeal());
};



const deleteMeal = (id) => {
    return fetch(`https://668c2a860b61b8d23b0ca041.mockapi.io/app/meals/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
  })
  .then((response) => response.json())
  
};

const editMeal = (clickedMeal, id) => {
  return fetch(`https://669156aa26c2a69f6e8f6d81.mockapi.io/diary/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(clickedMeal),
})

.then((response) => response.json())

};

export {addMeal, deleteMeal, editMeal};