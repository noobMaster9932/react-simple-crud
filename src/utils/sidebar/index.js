import React from 'react'
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import Home from '@material-ui/icons/Home'
import Master from '@material-ui/icons/Bookmarks'
import Transaction from '@material-ui/icons/Timeline'
import PropTypes from 'prop-types'
import './sidebar.css'

const Sidebar = ({ history, setMargin }) => {
  return (
    <SideNav
      onSelect={item => {
        history.push('/')
        history.push(item)
      }}
      onToggle={status => setMargin(status)}
    >
      <Toggle />
      <Nav defaultSelected={history.location.pathname}>
        <NavItem eventKey='/explore'>
          <NavIcon>
            <Home style={{ cursor: 'pointer', marginTop:12 }}  />
          </NavIcon>
          <NavText style={{ cursor: 'pointer' }} >
                Dashboard
          </NavText>
        </NavItem>
        <NavItem eventKey={func('/master-data', history.location.pathname)}>
          <NavIcon>
            <Master style={{ cursor: 'pointer', marginTop:12 }} />
          </NavIcon>
          <NavText>Master Data</NavText>
          <NavItem eventKey='/master-data/work-order'>
            <NavText>Work Order</NavText>
          </NavItem>
          <NavItem eventKey='/master-data/department'>
            <NavText>Department</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey={func('/trancaction', history.location.pathname)}>
          <NavIcon>
            <Transaction style={{ cursor: 'pointer', marginTop:12 }} />
          </NavIcon>
          <NavText>Transaction</NavText>
          <NavItem eventKey='/transaction/sync'>
            <NavText>Synchronize</NavText>
          </NavItem>
        </NavItem>
      </Nav>
    </SideNav>
  )
}
Sidebar.propTypes = {
  history:PropTypes.object,
  setMargin:PropTypes.func,
  selected:PropTypes.bool
}
export default Sidebar
const func = (mainPath, currentPath) => {
  const arr = currentPath.split(mainPath)
  if(arr.length > 1) {
    return currentPath
  } else {
    return mainPath
  }
}