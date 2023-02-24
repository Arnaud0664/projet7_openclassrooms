import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About'
import Product from './pages/Product'
/*import Footer from './components/Footer/index'
import Error from './components/Error/index'*/
import './style/css/index.css'

function App() {
    return ( 
        <main> 
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
            </Routes>      
        </main>   
    );
}

export default App;
