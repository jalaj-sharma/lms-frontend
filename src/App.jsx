import './App.css'

import { Route, Routes } from 'react-router-dom';

import AboutUs from './Pages/AboutUs.jsx';
import HomePage from './Pages/HomePage.jsx'
import NotFound from './Pages/NotFound.jsx';
function App() {

  return (
    <>
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/about" element={<AboutUs />} />
     <Route path="*" element={<NotFound />} />
     </Routes>
    </>
    
  )
}

export default App
