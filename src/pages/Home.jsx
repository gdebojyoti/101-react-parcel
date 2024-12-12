import { Link } from 'react-router'
import pagewrap from '../core/pagewrap'

const Home = () => {
  return (
    <div>
      <article>Home page content....</article>
      <section>
        {hotelsData.map(({ key, name }) => {
          return (
            <div key={key}>
              <Link to={`/restaurant/${key}/${name}`}>{name}</Link>
            </div>
          )
        })}
      </section>
    </div>
  )
}

const hotelsData = [
  {
    key: 1,
    name: 'Punjabi Masala'
  },
  {
    key: 2,
    name: 'Spices'
  }
]

export default pagewrap(Home, { key: 'home' })