import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Main from './Components/main'
import History from './Components/History'


function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/history" element={<History />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
