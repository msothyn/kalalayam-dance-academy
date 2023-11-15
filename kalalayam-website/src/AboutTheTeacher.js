import React from 'react';
import './AboutTheTeacher.css';
import teacherImage from './red.jpeg'; // Import the teacher's image

const AboutTheTeacher = () => {
    return (
        <section className="about-teacher-section">
            <div className="about-teacher-container">
                <div className="teacher-content">
                    <div className="teacher-info">
                        <h2>About the Teacher</h2>
                        <p>
                            Parimala's dance journey began at the age of 6 in Sri Lanka. After she completed her
                            basic training with her dance teacher, she joined at the university of Jaffna to complete
                            her Barathanatyam diploma. However, while preparing for her dance diploma she immigrated
                            to Canada in 1983. Here she continued her education through master classes with various teachers.
                            Alongside dance, she holds a Carnatic music diploma and earned a science bachelor's degree from
                            Western University in London, Ontario. Her passion led her to found Kalalayam Academy, where,
                            over the last 31 years, she's shared her knowledge and love for dance. Some of her students have
                            completed their Arangetram with live music ensembles, a testament to her teaching excellence and
                            dedication to the art of Bharatanatyam.
                        </p>
                    </div>
                    <div className="teacher-image">
                        <img src={teacherImage} alt="Teacher's Image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTheTeacher;
