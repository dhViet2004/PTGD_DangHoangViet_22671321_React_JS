import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'
import ChefffyHeader from './components/CheffiyNavbar'

function App() {
  return (
    <BrowserRouter>
      <ChefffyHeader />
      <Routes>
        <Route path='/' />

      </Routes>
    </BrowserRouter>
  )
}

export default App
