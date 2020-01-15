import React, { useState } from 'react'
import Register from './register'
import Login from './login'

const index = () => {
  const [isRegister, setRegister] = useState(true)
  const toggle = () => setRegister(!isRegister)
  const buttonClick = () => {
    localStorage.setItem('isAuth', true)
    window.location.reload()
  }
  return (
    isRegister ? (
      <Register toggle={toggle} submit={buttonClick} />
    ) : (
      <Login toggle={toggle} submit={buttonClick} />
    )
  )
}
export default index
