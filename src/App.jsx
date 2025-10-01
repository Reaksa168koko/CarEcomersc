import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/page/Navbar'
import Banner from './components/page/Banner'
import Content from './components/page/content'
import Categories from './components/page/Categories'
import TestlaSplaid from './components/Detailproduct/TestlaSplaid'
import Products from './components/page/Products'

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
            </div>
          }
        />

        {/* Dynamic car detail route */}
        <Route path="/car/:id" element={<TestlaSplaid />} />

        {/* Optional separate routes */}
        {/* <Route path="/banner" element={<Banner />} />
        <Route path="/content" element={<Content />} />
        <Route path="/categories" element={<Categories />} /> */}
      </Routes>
    </Router>
  )
}

export default App
