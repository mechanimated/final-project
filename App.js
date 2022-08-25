import React from "react";
import NokemonContainer from "./NokemonContainer";
import {Route, Routes, Link, Outlet} from 'react-router-dom';
import ContactList from "./ContactList";
import Contact from "./Contact";



function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>All The People You Never Call Cuz You're A Bad Friend</h2>
      </div>
      

     
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/ContactList'>ContactList</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
          <li>
            <Link to='/NewContactForm'>NewContactForm</Link>
          </li>
        </ul>
      </nav>
      <NokemonContainer />
      <Outlet />
    </div>
  );
}

export default App;
