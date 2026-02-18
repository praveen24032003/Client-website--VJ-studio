import React from 'react';
import { MapPin, Phone, Instagram, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>VJ Studio</h3>
                    <p>Capturing moments, creating memories. Your trusted partner for photography services and equipment rentals in Erode.</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/vallu_payan_official" target="_blank" rel="noopener noreferrer">
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/rentals">Rent Camera</a></li>
                        <li><a href="/sales">Buy Equipment</a></li>
                        <li><a href="/booking">Book Photoshoot</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul className="contact-info">
                        <li>
                            <MapPin size={18} />
                            <span>Valaikara Street, Erode, Tamil Nadu</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>+91 9750181649</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>contact@vjstudio.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} VJ Studio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
