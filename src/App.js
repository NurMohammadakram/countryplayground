import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import SingleCountryInfo from './components/SingleCountryWholeInfo/SingleCountryInfo';
import AllRegionInfo from './components/AllRegionInfo/AllRegionInfo';
import NotFound from './components/NotFound/NotFound';
import AfricaCountries from './components/AfricaRegion/AfricaCountries';
import About from './components/About/About';
import AsiaCountries from './components/AsiaRegion/AsiaCountries';
import EuropeCountries from './components/EuropeRegion/EuropeCountries';
import Contact from './components/Contact/Contact';
import OseaniaCountries from './components/OseaniaRegion/OseaniaCountries';
import Maps from './components/Maps/Maps';
import AmericasCountries from './components/AmericasRegion/AmericasCountries';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <AllRegionInfo/> } />
        <Route path='Asia' element={<AsiaCountries />} />
        <Route path='Europe' element={<EuropeCountries />}/>
        <Route path='Africa' element={<AfricaCountries />} />
        <Route path='Oceania' element={<OseaniaCountries />} />
        <Route path='Americas' element={<AmericasCountries />} />
        <Route path='map' element={ <Maps /> } />
        <Route path='about' element={ <About /> } />
        <Route path='contact' element={ <Contact />} />
        <Route path={`/:region/country/:name/:code`} element={ <SingleCountryInfo /> } />
        <Route path='*' element={ <NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
