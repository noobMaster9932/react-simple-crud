import React, { Fragment, useState, useEffect } from 'react'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

import Routes from './routes'
import Navbar from './navbar'
import Sidebar from './sidebar'
import { CSSTransition } from 'react-transition-group'
import { styleAction } from '../redux/actions'

const isAuth = localStorage.getItem('isAuth')
const app = ({ location, history, resize }) => {
  const [ showSideBar, toggleSideBar ] = useState(true)
  useEffect(() => {
    window.addEventListener('resize', () => {
      const { innerWidth, innerHeight } = window
      resize(innerWidth, innerHeight)
    })
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])
  const _toggleSideBar = status => toggleSideBar(status)
  return (
    <Fragment>
      <Navbar history={history} toggleSideBar={_toggleSideBar} status={showSideBar} />
      <CSSTransition 
        in={showSideBar} 
        timeout={5000} 
        unmountOnExit 
        classNames='sidebarstyle' 
      >
        <Sidebar history={history} />
      </CSSTransition>
      <Container style={{ marginTop:70, marginLeft:showSideBar ? 120:0 }}>
        <Switch>
          {Routes.filter(e =>
            isAuth ? e.path !== '/login' : e.path === false
          ).map(item => (
            <Route
              key={Math.random()}
              path={item.path}
              component={item.component}
            />
          ))}
          {!isAuth && <Redirect to='/login' />}
          {(location.pathname === '/' ||
                            location.pathname === '/login') &&
                            isAuth && <Redirect to='/explore' />}
          {isAuth ? (
            <Redirect to='/error' />
          ) : (
            <Redirect to='/login' />
          )}
        </Switch>
      </Container>
    </Fragment>
  )
}
app.propTypes = {
  match: PropTypes.any,
  location: PropTypes.any,
  history: PropTypes.object,
  resize:PropTypes.func
}
const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {
  resize:styleAction.resize
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app))
