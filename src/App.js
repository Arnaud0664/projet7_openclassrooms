import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import About from './pages/About/About'
import Product from './pages/Product/Product'
/*import Footer from './components/Footer/index'
import Error from './components/Error/index'*/
import styles from './assets/modules_css/App.module.css';

function App() {
    return ( 
        <div className={styles.App}> 
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
            </Routes>
                
        </div>   
    );
}

export default App;
