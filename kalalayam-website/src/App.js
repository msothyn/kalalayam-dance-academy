import React from 'react';
import Navbar from './navbar';
import LandingPage from './LandingPage';
import AboutTheStudio from './AboutTheStudio'; 
import AboutTheTeacher from './AboutTheTeacher'; 
import Contact from './Contact';
import Gallery from './Gallery';

function App() {
    return (
        <div className="App">
            <Navbar />
            <LandingPage />
            <AboutTheStudio />
            <AboutTheTeacher/>
            <Gallery/>
            <br></br>
            <br></br>
            <Contact/>
        </div>
    );
}

export default App;
