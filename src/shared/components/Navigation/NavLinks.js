// the collection of links we renders in MainNavigation
import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Utilisateurs
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">Mes Lieux</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Ajouter un Lieu</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authentification</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
