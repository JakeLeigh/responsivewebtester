import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className='navbar' role="navigation" aria-label="main navigation">
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <h1 className='subtitle'>Responsive Website Tester</h1>
        </a>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
  )
}

export default Nav;