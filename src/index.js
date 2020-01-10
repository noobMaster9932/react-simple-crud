import React from 'react'
import { render } from 'react-dom'
import serviceWorker from './service-worker'
import './assets/all.css'

const element = document.getElementById('root')

const appRender = () => {
  const MainApp = require('./app').default
  render(<MainApp />, element)
}
if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    render(<NextApp />, element)
  })
}
appRender()
serviceWorker()
