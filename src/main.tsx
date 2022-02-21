import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FontStyles from './FontStyles'
import GlobalStyles from './GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
