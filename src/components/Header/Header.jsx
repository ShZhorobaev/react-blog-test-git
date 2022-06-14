import React from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../../assets/images/blogLogo.jpg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <img className="header-logo" src={headerLogo} alt="Header Logo" />
      <nav>
        <div className="header__links">
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/posts">Все посты</NavLink>
        </div>
      </nav>
      <div className="header__btns">
        <NavLink to="/auth/login" className="btns__item">
          Войти
        </NavLink>
        <NavLink to="/auth/registration" className="btns__item">
          Зарегистрироваться
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
