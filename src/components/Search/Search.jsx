import React from 'react'
import "./Search.css"

function Search({search, setSearch}) {

const handleChange = (e) => {
    setSearch(e.target.value);
};

  return (
    <form className="search-form">
        <input className="search-input" value={search} onChange={handleChange} type="text" name="search" id="search" placeholder="Buscar por nombre..." />
    </form>
  )
}

export default Search