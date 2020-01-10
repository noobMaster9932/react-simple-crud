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
                  placeholder='Nomer telepon'
                  className='login-input'
                  type='number'
                />
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <Input
                  placeholder='Email'
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
                <Input
                  placeholder='Input ulang Password'
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
                                    Daftar
                </Button>
              </Col>
            </Row>
            <Row className='mb-1'>
              <Col>
                <small className='login-text'>
                                    Sudah punya akun?
                  <a
                    style={{
                      color: 'blue',
                      cursor: 'pointer'
                    }}
                    className='ml-2'
                    onClick={this.props.toggle}
                  >
                                        Login
                  </a>
                </small>
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col>
                <small className='login-text'>
                                    Dengan ini saya mematuhi
                  <a
                    style={{
                      color: 'blue',
                      cursor: 'pointer'
                    }}
                    className='ml-2'
                    onClick={this.props.toggle}
                  >
                                        Syarat dan ketentuan
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
