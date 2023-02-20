import React from 'react'
import { Router, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/index'
import Product from './pages/Product/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Error from './components/Error/index'

function App() {
 return (
  <Router>
   <Header />

   <Route exact path="/">
    <Home />
   </Route>
   <Route path="/fiche-logement">
    <Product />
   </Route>
   <Route path="/a-propos">
    <About />
   </Route>
   <Route path="/footer">
    <Footer />
   </Route>
   <Route>
    <Error />
   </Route>

   <Footer />
  </Router>
 )
}

export default App
