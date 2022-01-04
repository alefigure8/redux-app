import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import ProductCOmponent from './components/ProductCOmponent'
import ProductDetails from './components/ProductDetails'
import ProductListing from './components/ProductListing'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductListing/>}/>
          <Route path='/product/:productId' element={<ProductDetails/>}/>
          <Route path='*' element={<h2>Product Not Found!</h2>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
