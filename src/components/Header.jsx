import { createElement } from 'react'

// react element
const headingElm = createElement('h1', { key: 'h1' }, 'I got in 👋🏼')

// react element using jsx
const subheadingElm = <h2 key='h2'>Let's see how it goes this time 🤞🏼</h2>

const Header = () => {
  return <header className="header">
    {headingElm}
    {subheadingElm}
  </header>
}

export default Header