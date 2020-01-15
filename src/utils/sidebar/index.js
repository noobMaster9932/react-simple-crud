import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap'

const index = ({ history }) => {
  const path = history.location.pathname
  return (
    <div className='sidebar'>
      <Row className={path === '/explore' ? 'menu-active':'menu-inactive'}>
        <Col
          onClick={() => history.push('/')}
          className='text-center'
          style={{ cursor: 'pointer', margin: 0, padding: 0 }}
        >
          <img
            src={require('../../assets/icons/home.png')}
            width={30}
          />
        </Col>
      </Row>
      <Row className={path === '/sync' ? 'menu-active':'menu-inactive'}>
        <Col
          onClick={() => history.push('/sync')}
          className='text-center'
          style={{ cursor: 'pointer', margin: 0, padding: 0 }}
        >
          <img
            src={require('../../assets/icons/refresh.png')}
            width={30}
          />
        </Col>
      </Row>
      <Row className={path === '/workflow' ? 'menu-active':'menu-inactive'}>
        <Col
          onClick={() => history.push('/workflow')}
          className='text-center'
          style={{ cursor: 'pointer', margin: 0, padding: 0 }}
        >
          <img
            src={require('../../assets/icons/assignment.png')}
            width={30}
          />
        </Col>
      </Row>
      <Row className={path === '/settings' ? 'menu-active':'menu-inactive'}>
        <Col
          onClick={() => history.push('/settings')}
          className='text-center'
          style={{ cursor: 'pointer', margin: 0, padding: 0 }}
        >
          <img
            src={require('../../assets/icons/gear.png')}
            width={30}
          />
        </Col>
      </Row>
    </div>
  )
}

index.propTypes = {
  history: PropTypes.object
}
export default index
