import React from 'react'
import { useParams, useLocation, NavLink, Route } from 'react-router-dom'
import Cat from './Cat'
// import axios from 'axios'
import classes from '../css/film.module.css';
import  '../css/index.less'
import FilmChild from './FilmCHild'
export default function Film() {
  // - useParams拿不到query传参，只能拿到动态路由params传递的参数
  // let { name } = useParams()
  // console.log(name);
  let location = useLocation()
  console.log(location.query);
  return (
    <div className="app">
      <NavLink to={'/film/cat'} activeClassName={classes['my-active']}>cat eye</NavLink>
      <p className='aa'>ppp
        <span className='bb'>span</span>
      </p>
      <FilmChild></FilmChild>
      <Route path={'/film/cat'} component={Cat}></Route>
    </div>
  )
}
