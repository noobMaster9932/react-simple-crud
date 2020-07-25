import React from 'react'
import { render } from 'react-dom'
import serviceWorker from './service-worker'
import './assets/all.css'
import App from './app'

const Root = () => {
  return (
    <App/>
  )
}
const element = document.getElementById('root')
render(<Root />, element)
serviceWorker()