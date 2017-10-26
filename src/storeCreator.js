import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

function storeCreator(rootReducer = () => {}) {
  const enhancers = []
  const middleware = [
    thunk
  ]

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const store = createStore(
    rootReducer,
    composedEnhancers,
  )

  return store
}

export default storeCreator
