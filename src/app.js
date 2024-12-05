import React from 'react'
import ReactDOM from 'react-dom/client'

const headingElm = React.createElement('h1', { key: 'h1' }, 'I got in.')
const subheadingElm = React.createElement('h2', { key: 'h2' }, 'Let\'s see how it goes this time')
const containerElm = React.createElement('header', {}, [headingElm, subheadingElm])

const rootElm = document.getElementById('root')

const root = ReactDOM.createRoot(rootElm)

root.render(containerElm)