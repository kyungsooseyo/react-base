import React, { Component,PureComponent } from 'react'
import { HashRouter, Route, Link, Redirect, Switch, NavLink } from 'react-router-dom'
import Center from './Center'
import Film from './Film'
import Login from './Login'
import My from './My'
import NotFound from './NotFound'
function isAuth() {
  return localStorage.getItem('token1')
}
export default class IndexRouter extends PureComponent {
  render() {
    return (
      <HashRouter>
        {/* <Link to={'/center'}>center</Link>
        <Link to={'/film'}>film</Link> */}
        <NavLink to={'/center/11'} style={{ margin: '20px' }}>center</NavLink>
        <NavLink to={{ pathname: '/film', query: { name: 'zs' } }} style={{ margin: '20px' }}>film</NavLink>
        <NavLink to={{ pathname: '/my', state: { age: 12 } }} style={{ margin: '20px' }} activeClassName='my-active'>my</NavLink>
        <Switch>
          {/* 如果这么写的话就会有歧义，路径上显示的是center，但是组件展示的是login；除此之外，在center组件里面的props也拿不到router相关的方法,使用component这个方式是能拿到的，render拿不到,若想拿到，则直接在回调函数中写上形参，再传递过去 */}
          {/* <Route path='/center/:id' render={() => isAuth() ? <Center /> : <Login></Login>} /> */}
          <Route path='/center/:id' render={(props) => isAuth() ? <Center  {...props} /> : <Redirect to={'/login'} />}></Route>
          <Route path={'/login'} component={Login}></Route>
          <Route path='/film' component={Film} />
          <Route path='/my' component={My} />
          <Route component={NotFound} />
          <Redirect to='/center'></Redirect>
        </Switch>
      </HashRouter>
    )
  }
}