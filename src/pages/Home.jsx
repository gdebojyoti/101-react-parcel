import pagewrap from '../core/pagewrap'

const Home = () => {
  return (
    <div>
      This is my home page..
    </div>
  )
}

export default pagewrap(Home, { key: 'home' })