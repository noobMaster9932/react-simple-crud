import React, { Component } from 'react'
import { Container, Card, CardBody, Row, Col, Input, Button } from 'reactstrap'

import PropTypes from 'prop-types'

export class index extends Component {
  render() {
    return (
      <Container className='login-container'>
        <Card className='login-card'>
          <img
            src={require('../../assets/img/login-logo.png')}
            className='login-logo'
          />
          <Row>
            <Col className='text-center'>
              <h6 className='login-text'>Belajar yuk!</h6>
            </Col>
          </Row>
          <CardBody style={{ paddingRight: 50, paddingLeft: 50 }}>
            <Row className='mb-3'>
              <Col>
                <Input
                  placeholder='Username atau email'
                  className='login-input'
                />
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <Input
                  placeholder='Password'
                  className='login-input'
                  type='password'
                />
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <Button
                  className='login-button'
                  onClick={this.props.submit}
                >
                                    Login
                </Button>
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <small className='login-text'>
                                    Belum punya akun?
                  <a
                    style={{
                      color: 'blue',
                      cursor: 'pointer'
                    }}
                    className='ml-2'
                    onClick={this.props.toggle}
                  >
                                        Daftar
                  </a>
                </small>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    )
  }
}

export default index
index.propTypes = {
  toggle: PropTypes.func,
  submit: PropTypes.func
}
