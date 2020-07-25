import React, { Fragment, useState, useEffect } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Routes from './routes'
import Sidebar from './sidebar'
import Navbar from './navbar'
import { styleAction } from '../redux/actions'

const app = ({ history, resize, location }) => {
  const [ expandSidebar, toggleSideBar ] = useState(false)

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
      <Sidebar history={history} setMargin={_toggleSideBar} selected={expandSidebar} />
      <Navbar history={history} marginLeft={expandSidebar ? 250:80}  />
      <div style={appStyle(expandSidebar)}>
        <Switch>
          <Route path='/explore' component={Routes.Dashboard} />
          <Routes.RouteComponent location={location}/>
        </Switch>
      </div>
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

const appStyle = expandSidebar => ({
  margin:0, 
  padding:0, 
  marginTop:65, 
  paddingLeft:expandSidebar ? 250:80, 
  paddingRight:20, 
  paddingBottom:10
})