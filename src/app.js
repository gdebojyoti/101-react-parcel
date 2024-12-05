import { createRoot } from 'react-dom/client'

import Header from './components/Header'

const App = () => {
  return <div>
    <Header />
  </div>
}

const rootElm = document.getElementById('root')

const root = createRoot(rootElm)

root.render(<App />)