import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleWhatsAppClick = () => {
        if (!name || !email || !phoneNumber) {
            alert('Please fill in all mandatory fields (Name, Email, Phone Number)');
            return;
        }

        // Construct a WhatsApp message with user input
        const whatsappMessage = `Hi, I'm ${name}. My email is ${email} and phone number: ${phoneNumber}. Message: ${message}`;

        // Replace 'PHONE_NUMBER' with the teacher's actual WhatsApp number
        const whatsappLink = `https://api.whatsapp.com/send?phone=2265822075&text=${encodeURIComponent(whatsappMessage)}`;

        // Open a new window or tab with the WhatsApp link
        window.open(whatsappLink, '_blank');
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2>Contact the Teacher</h2>
                <p>Fill out and submit the form below to reach out to Parimala via WhatsApp.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">
                            Name<span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email<span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">
                            Phone Number<span style={{ color: 'red' }}>*</span>
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </form>
                <button className="whatsapp-button" onClick={handleWhatsAppClick}>
                    Send via WhatsApp
                </button>
            </div>
        </section>
    );
};

export default Contact;
