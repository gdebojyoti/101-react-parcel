import React from 'react'
import ReactDOM from 'react-dom/client'

const headingElm = React.createElement('h1', { key: 'h1' }, 'I got in.')

const subheadingElm = <h2 key='h2'>Let's see how it goes this time</h2>

const ContentComponent = () => {
  return <>My amazing content..</>
}

const containerElm = React.createElement('header', {}, [headingElm, subheadingElm, <ContentComponent key='content' />])

const rootElm = document.getElementById('root')

const root = ReactDOM.createRoot(rootElm)

root.render(containerElm)