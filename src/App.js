import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

//components 
import Navbar from './components/navbar/Navbar';
import WhyUs from './components/whyUs/WhyUs';
const App = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Navbar/>} />
                <Route path='/whyUs' element={<WhyUs/>} exact/>
            </Routes>
        </Router>
    </div>
  )
}

export default App