import React from 'react'
import { Navbar, Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const index = ({ history, marginLeft, fullWidth }) => {
  
  return (
    <Navbar
      className={'fixed-top '}
      color-on-scroll='100'
      expand='lg'
      style={{ background: '#33BBAD', marginLeft:marginLeft, borderRadius:5, height:50, marginTop:5, marginRight:fullWidth <=800? 5:25 }}
    >
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
  status:PropTypes.bool,
  marginLeft:PropTypes.number,
  fullWidth:PropTypes.number
}
const mapStateToProps = s => ({ ...s.styleReducer })
export default connect(mapStateToProps, {})(index)
