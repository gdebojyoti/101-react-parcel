import React from 'react'
import ReactDOM from 'react-dom'

const headingElm = React.createElement('h1', {}, 'I got in.')
const rootElm = document.getElementById('root')

const root = ReactDOM.createRoot(rootElm)

root.render(headingElm)