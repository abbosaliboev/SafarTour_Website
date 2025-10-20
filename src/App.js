import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Process from './pages/Process'
import Packages from './pages/Packages'
import Gallery from './pages/Gallery'
import Booking from './pages/Booking'
import Error from './pages/Error'
import Contact from './pages/Contact'
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PublicOffer from "./pages/PublicOffer";
import License from "./pages/License";

export default function App() {
  return (
    <div>
        <Header />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/process' element={<Process/>}/>
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/public-offer" element={<PublicOffer />} />
        <Route path="/license" element={<License />} />
        </Routes>
        <Footer />
    </div>
  )
}
