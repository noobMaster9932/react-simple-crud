import React, { Component } from 'react'
import { NavbarBrand, Navbar, Container, Row, Col, Input } from 'reactstrap'
import PropTypes from 'prop-types'
export class index extends Component {
    state = {
      collapseOpen: false,
      color: 'bg-transperent',
      iconTabs: 1,
      nameShow: false
    }

    render() {
      const { history } = this.props
      return (
        <Navbar
          className={'fixed-top '}
          color-on-scroll='100'
          expand='lg'
          style={{ background: '#CCD1D1' }}
        >
          <Container>
            <div className='navbar-translate'>
              <NavbarBrand
                data-placement='bottom'
                rel='noopener noreferrer'
              >
                <img
                  src={require('../../assets/img/title-logo.png')}
                  width='40px'
                  style={{ cursor: 'pointer' }}
                  onClick={() => history.push('/')}
                />
              </NavbarBrand>
              <NavbarBrand>
                <Input
                  placeholder='Cari artikel, guru, murid'
                  onKeyPress={event =>
                    event.key === 'Enter' && alert('SOON')
                  }
                  type='text'
                  style={{
                    width: 500,
                    color: 'black',
                    fontSize: 'small'
                  }}
                  className='navbar-input'
                />
              </NavbarBrand>
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
}
index.propTypes = {
  history: PropTypes.object
}
export default index
