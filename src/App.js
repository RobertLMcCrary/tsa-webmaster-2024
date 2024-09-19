import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Solutions from "./components/Pages/Solutions";
import Pricing from "./components/Pages/Pricing";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
