import React from 'react'
import { NavbarBrand, Navbar, Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'

const index = ({ status, toggleSideBar, history }) => {
  
  return (
    <Navbar
      className={'fixed-top '}
      color-on-scroll='100'
      expand='lg'
      style={{ background: '#CCD1D1' }}
    >
      <NavbarBrand
        data-placement='bottom'
        rel='noopener noreferrer'
      >
        <img
          src={require('../../assets/icons/menu.png')}
          width='25px'
          style={{ cursor: 'pointer', marginLeft:20 }}
          onClick={() => toggleSideBar(!status)}
        />
      </NavbarBrand>
      <Container>
        <div className='navbar-translate'>
        </div>
        <Row>
          <Col>
            <img
              src={require('../../assets/icons/notification-off.png')}
              width={20}
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/order')}
            />
          </Col>
          <Col>
            <img
              src={require('../../assets/icons/chat.png')}
              width={20}
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/chats')}
            />
          </Col>
          <Col>
            <img
              src={require('../../assets/icons/account.png')}
              width={20}
              style={{ cursor: 'pointer' }}
              onClick={() => history.push('/profile')}
            />
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}
index.propTypes = {
  history: PropTypes.object,
  toggleSideBar:PropTypes.func,
  status:PropTypes.bool
}
export default index
