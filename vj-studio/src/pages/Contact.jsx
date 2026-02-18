import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';
import '../styles/Content.css';

const Contact = () => {
    return (
        <div className="content-page contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for bookings, rentals, or queries</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2 contact-grid">
                    <div className="contact-info-section">
                        <h2>Get In Touch</h2>
                        <p>We are always ready to help you capture your best moments.</p>

                        <div className="info-list">
                            <div className="info-item">
                                <div className="icon"><Phone size={20} /></div>
                                <div>
                                    <h4>Phone / WhatsApp</h4>
                                    <p>+91 9750181649</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon"><MapPin size={20} /></div>
                                <div>
                                    <h4>Studio Address</h4>
                                    <p>Valaikara Street, Erode</p>
                                    <p>Tamil Nadu, India</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon"><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>contact@vjstudio.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon"><Clock size={20} /></div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>Mon - Sat: 9:00 AM - 9:00 PM</p>
                                    <p>Sun: 10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-connect">
                            <h4>Connect With Us</h4>
                            <a href="https://www.instagram.com/vallu_payan_official" target="_blank" rel="noreferrer" className="social-btn instagram">
                                <Instagram size={20} /> Follow on Instagram
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-section">
                        <h3>Send a Message</h3>
                        <form onSubmit={(e) => { e.preventDefault(); alert("Please contact us via Phone or WhatsApp for faster response."); }}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" placeholder="Your Phone Number" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
