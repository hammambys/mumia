import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBox() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <div className='search-field'>
          <i className="fa fa-search"></i>
          <input
          placeholder='chercher'
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
          ></input>

        </div>

     
       <button className="primary" type="submit">
          Rechercher
          
          </button>
      </div>
      
    </form>
  );
}
