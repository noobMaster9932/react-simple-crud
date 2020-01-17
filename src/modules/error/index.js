import React, { useState } from 'react'
import './style.css'
import { Row, Col, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

const index = () => {
  const [isClick, setClick] = useState(false)
  return isClick ? <Redirect to='/' /> :  (
    <figure>
      <div className='sad-mac'></div>
      <figcaption>
        <span className='sr-text'>Error 404: Not Found</span>
        <span className='e'></span>
        <span className='r'></span>
        <span className='r'></span>
        <span className='o'></span>
        <span className='r'></span>
        <span className='_4'></span>
        <span className='_0'></span>
        <span className='_4'></span>
        <span className='n'></span>
        <span className='o'></span>
        <span className='t'></span>
        <span className='f'></span>
        <span className='o'></span>
        <span className='u'></span>
        <span className='n'></span>
        <span className='d'></span>
      </figcaption>
      <Row style={{ marginTop:30 }}>
        <Col className='text-center'>
          <Button onClick={() => setClick(true)} style={{ cursor:'pointer' }} color='primary' >Go Back Home</Button>
        </Col>
      </Row>
    </figure>

      
  )
}
export default index
