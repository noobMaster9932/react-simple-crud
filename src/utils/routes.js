import React from 'react'
import Loadable from 'react-loadable'


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

export default [
  { component: Dashboard, path: '/explore' },
  { component: Profile, path: '/profile' },
  { component: WorkOrder, path:'/master-data/work-order' },
  { component: WorkOrder, path:'/master-data/department' },
  { component: WorkOrder, path:'/transaction/sync' }
]
