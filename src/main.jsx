import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Formulario.jsx'
import './index.css'
import {createRoot} from 'react-dom/client'

const root = createRoot(document.querySelector('#root'))
root.render(<App />)


