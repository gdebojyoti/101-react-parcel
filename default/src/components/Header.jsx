import { createElement, useEffect } from 'react'

import useLocalStorage from '../customHooks/useLocalStorage'
import { Link } from 'react-router'

// react element
const headingElm = createElement('h1', { key: 'h1' }, 'Welcome to my web page 👋🏼')

const obj = {a:1}

const Header = () => {
  const [lsd, setLsd] = useLocalStorage('meow')

  useEffect(() => {
    const interval = setInterval(() => {
      setLsd(obj)
    }, 2000)
    const timer = setTimeout(() => {
      setLsd('2:3')
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  console.log(lsd)

  return <header className="header">
    {headingElm}

    <nav>
      <Link to='/'>Home</Link>
    </nav>
  </header>
}

export default Header