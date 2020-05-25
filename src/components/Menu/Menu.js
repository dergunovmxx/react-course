import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Menu.module.scss'

function Menu () {
  return (
    <>
      <h2>Меню</h2>
      <div><NavLink to='/' activeClassName={css.active} exact>На главную</NavLink></div>
      <div><NavLink to='/detail' activeClassName={css.active}>Детальная страница</NavLink></div>
      <div><NavLink to='/css-module' activeClassName={css.active}>Css module</NavLink></div>
      <div><NavLink to='/page404' activeClassName={css.active}>Страница 404</NavLink></div>
    </>
  )
}

export default Menu
