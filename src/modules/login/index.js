import React, { Component } from 'react'
import Register from './register'
import Login from './login'

export class index extends Component {
    state = {
      isRegister: true
    }

    toggle = () => {
      this.setState({ isRegister: !this.state.isRegister })
    }
    buttonClick = () => {
      localStorage.setItem('isAuth', true)
      window.location.reload()
    }

    render() {
      const { isRegister } = this.state
      return isRegister ? (
        <Register toggle={this.toggle} submit={this.buttonClick} />
      ) : (
        <Login toggle={this.toggle} submit={this.buttonClick} />
      )
    }
}

export default index
