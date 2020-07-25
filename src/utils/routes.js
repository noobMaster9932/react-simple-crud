import React from 'react'
import Loadable from 'react-loadable'
import { Switch } from '@material-ui/core'
import { Route, Redirect } from 'react-router-dom'
import propTypes from 'prop-types'


const Loading = () => <div className='loader' />

const Dashboard = Loadable({
  loader: () => import('../modules/default'),
  loading: Loading
})


const Profile = Loadable({
  loader: () => import('../modules/profile'),
  loading: Loading
})
const WorkOrder = Loadable({
  loader:() => import('../modules/master-data/work-order'),
  loading: Loading
})


const RouteComponent = ({ location }) => {
  if(location.pathname === '/') return <Redirect to='/explore'/>
  return (
    <Switch>
      <Route path='/explore' component={Dashboard} />
      <Route path='/profile' component={Profile} />
      <Route path='/master-data/work-order' component={WorkOrder} />
      <Route path='/transaction/sync' component={WorkOrder} />
      <Redirect to='/error'/>
    </Switch>
  )
}
export default {
  Dashboard,
  RouteComponent
}
RouteComponent.propTypes = {
  location:propTypes.object
}