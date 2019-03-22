import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap'
import './index.scss'
import App from './app'

function renderApp() {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'),
  )
}

renderApp()

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp()
  })
}
