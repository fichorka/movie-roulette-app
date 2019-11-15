import { render } from 'react-dom'
import React from 'react'
import App from './App.jsx'
import './styles/page-transition.scss'
import './styles/main.scss'

const appEl = document.getElementById('app')

render(<App />, appEl)
