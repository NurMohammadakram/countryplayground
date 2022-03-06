import React from 'react';
import './scss/style.scss';
import { Routes, Route, Navigate} from "react-router-dom";
import Navbar from './components/Navbar';
import SingleCountryInfo from './components/SingleCountryInfo/SingleCountryInfo';
import AllRegionInfo from './components/AllRegionInfo/AllRegionInfo';
import NotFound from './components/NotFound';
import About from './components/About';
import RegionalCountries from './components/RegionalCountries/RegionalCountries';
import Contact from './components/Contact';
import Maps from './components/Maps';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Navigate to='/home'/>} />
        <Route path='home' element={ <AllRegionInfo /> } />
        <Route path='home/:Region' element={<RegionalCountries />} />
        <Route path='home/:Region/country/:name/:code' element={ <SingleCountryInfo /> } />
        <Route path='map' element={ <Maps /> } />
        <Route path='about' element={ <About /> } />
        <Route path='contact' element={ <Contact />} />
        <Route path='*' element={ <NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
