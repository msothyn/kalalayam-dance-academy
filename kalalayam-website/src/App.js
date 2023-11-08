import React from 'react';
import Navbar from './navbar';
import LandingPage from './LandingPage';
import AboutTheStudio from './AboutTheStudio'; 
import Gallery from './Gallery';
import AboutTheTeacher from './AboutTheTeacher'; 
import Contact from './Contact';

function App() {
    return (
        <div className="App">
            <Navbar />
            <LandingPage />
            <AboutTheStudio />
            <Gallery/>
            <AboutTheTeacher/>
            <Contact/>
        </div>
    );
}

export default App;
