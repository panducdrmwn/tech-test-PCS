
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Notifications from './views/Notifications'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notification" element={<Notifications />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
