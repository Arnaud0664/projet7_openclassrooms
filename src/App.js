import React from 'react'
import { Router, Route } from 'react-router-dom'
import Home from './pages/Home/index'
/*import About from './pages/About/index'
import Product from './pages/Product/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Error from './components/Error/index'*/

function App() {
    return (
        <Router>
            <Route path="/">
                <Home />
            </Route>
        </Router>
    );
}

export default App
