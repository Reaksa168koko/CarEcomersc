import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/page/Navbar'
import Banner from './components/page/Banner'
import Content from './components/page/content'
import Categories from './components/page/Categories'
import TestlaSplaid from './components/Detailproduct/TestlaSplaid'
import Products from './components/page/Products'
import SportsCarsdetail from './components/Detailproduct/SportsCarsdetail'
import ProSUVs from './components/ProductCategory/ProSUVs'
import ProElectric from './components/ProductCategory/ProElectric'
import ProSportsCars from './components/ProductCategory/ProSportsCars'
import ProDuctluxary from './components/ProductCategory/proDuctluxary'
import LuxurySedansdetail from './components/Detailproduct/LuxurySedansdetail'
import Footer from './components/page/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page: render Banner + Content + Categories */}
        <Route
          path="/"
          element={
            <div>
              <Banner />
              <Content />
              <Categories />
              <Products/>
              <Footer/>
            </div>
          }
        />

        {/* Dynamic car detail route */}
        <Route path="/car/:id" element={<TestlaSplaid />} />
        <Route path='/luxary/:id' element={<LuxurySedansdetail/>}/>
        {/* product */}
         <Route path='/Sports' element={<ProSportsCars/>}/>
         <Route path='/luxary/' element={<ProDuctluxary/>}/>
         <Route path='/SUVs' element={<ProSUVs/>}/>
         <Route path='/Electric' element={<ProElectric/>}/>
      </Routes>
    </Router>
  )
}

export default App
