import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './modules/App.jsx'
process.title = 'starterApp'

ReactDOM.render(
	<App msg='Hello props' />,
	document.getElementById('app')
)
