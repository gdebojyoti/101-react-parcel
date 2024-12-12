import { createElement, useEffect } from 'react'

import useLocalStorage from '../customHooks/useLocalStorage'
import { Link } from 'react-router'

// react element
const headingElm = createElement('h1', { key: 'h1' }, 'I got in 👋🏼')

// react element using jsx
const subheadingElm = <h2 key='h2'>Let's see how it goes this time 🤞🏼</h2>

const obj = {a:1}

const Header = () => {
  const [lsd, setLsd] = useLocalStorage('meow')

  useEffect(() => {
    setInterval(() => {
      setLsd(obj)
    }, 2000)
    setTimeout(() => {
      setLsd('2:3')
    }, 5000)
  }, [])

  console.log(lsd)

  return <header className="header">
    {headingElm}
    {/* {lsd} */}
    {subheadingElm}

    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  </header>
}

export default Header