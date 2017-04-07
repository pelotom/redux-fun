import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux'

import reducer from './reducer'
import mapDispatchToProps from './mapDispatchToProps'
import App from './App'
import './index.css'

const mapStateToProps = counters => ({ counters })

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
)
