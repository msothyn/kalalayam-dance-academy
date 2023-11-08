import React from 'react';
import './Contact.css'

const Contact = () => {
    const handleWhatsAppClick = () => {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name && email && message) {
            // Retrieve user input from the form fields
            const userName = name.value;
            const userEmail = email.value;
            const userMessage = message.value;

            // Construct a WhatsApp message with user input
            const whatsappMessage = `Hi, I'm ${userName}. My email is ${userEmail}. Message: ${userMessage}`;

            // Replace 'PHONE_NUMBER' with the teacher's actual WhatsApp number
            const whatsappLink = `https://api.whatsapp.com/send?phone=2265822075&text=${encodeURIComponent(whatsappMessage)}`;

            // Open a new window or tab with the WhatsApp link
            window.open(whatsappLink, '_blank');
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2>Contact the Teacher</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="4" required />
                    </div>
                </form>
                <button className="whatsapp-button" onClick={handleWhatsAppClick}>
                    Contact via WhatsApp
                </button>
            </div>
        </section>
    );
};

export default Contact;

