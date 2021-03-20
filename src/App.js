import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Banner from './assets/banner.webp';


const App = () => {
    return (
        <>
            <Nav />
            <img style={{ width: '100%', objectFit: 'cover', display: 'block' }} src={Banner} alt="Developer Studio Mindset" />
            <About />
        </>
    );
};

export default App;