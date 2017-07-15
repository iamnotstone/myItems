import thunkMiddleware from 'redux-thunk'
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'                                          
import App from './components/App'
import reducer from './reducers'
import {Map,List} from 'immutable'
import {createLogger} from 'redux-logger'
const defaultState = Map({                                                    
        items:List([])
})
const loggerMiddleware = createLogger()
const store = createStore(reducer, defaultState,
	applyMiddleware(
        	thunkMiddleware,
        	loggerMiddleware)
	)
render(
        <Provider store={store}>
		<App />                                                        
        </Provider>,
        document.getElementById('root')
)

import {getItems} from './actions'
store.dispatch(getItems())
