import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Solutions from "./components/Pages/Solutions";
import Pricing from "./components/Pages/Pricing";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer";

function App() {
    let page = window.location.pathname;

    switch (page) {
        case "/Home":
            page = <Home />;
            break;

        case "/Solutions":
            page = <Solutions />;
            break;
            
        case "/Pricing":
            page = <Pricing />;
            break;
            
        case "/Contact":
            page = <Contact />;
            break;   

        default:
            page = <Home />
            break;    
    }

    return (
        <div className="App">
            <Navbar />
            {page}
            <Footer />
        </div>
    );
}

export default App;
