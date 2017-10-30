import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './App'
import rootReducer from './rootReducer'
import storeCreator from './storeCreator'

ReactDOM.render(
  <Provider store={storeCreator(rootReducer)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'))

registerServiceWorker()
