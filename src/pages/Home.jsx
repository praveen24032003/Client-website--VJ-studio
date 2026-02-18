import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ShoppingBag, Calendar, ArrowRight, Star, Shield, Clock } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Capture Every Moment With VJ Studio</h1>
                    <p>Tamil Nadu's Premier Photography Service & Camera Rental Hub. We bring your memories to life.</p>
                    <div className="hero-buttons">
                        <Link to="/booking" className="btn btn-primary">
                            Book Photoshoot <ArrowRight size={18} />
                        </Link>
                        <Link to="/rentals" className="btn btn-outline">
                            Rent Camera
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">Everything you need for your photography journey</p>

                    <div className="grid grid-3">
                        <div className="service-card">
                            <div className="icon-box">
                                <Camera size={40} />
                            </div>
                            <h3>Camera Rentals</h3>
                            <p>Rent top-tier DSLRs, lenses, and lighting equipment at affordable daily rates.</p>
                            <Link to="/rentals" className="link-arrow">Browse Rentals <ArrowRight size={16} /></Link>
                        </div>

                        <div className="service-card">
                            <div className="icon-box">
                                <ShoppingBag size={40} />
                            </div>
                            <h3>Equipment Sales</h3>
                            <p>Buy the latest cameras and accessories. Genuine products with warranty.</p>
                            <Link to="/sales" className="link-arrow">Shop Now <ArrowRight size={16} /></Link>
                        </div>

                        <div className="service-card">
                            <div className="icon-box">
                                <Calendar size={40} />
                            </div>
                            <h3>Photoshoot Booking</h3>
                            <p>Professional photography for Weddings, Events, and Portfolios.</p>
                            <Link to="/booking" className="link-arrow">View Packages <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section features-section">
                <div className="container">
                    <h2 className="section-title">Why Choose VJ Studio?</h2>
                    <div className="grid grid-3">
                        <div className="feature-item">
                            <Shield size={32} color="var(--primary)" />
                            <h3>Trusted Service</h3>
                            <p>Over 1000+ happy customers across Tamil Nadu.</p>
                        </div>
                        <div className="feature-item">
                            <Star size={32} color="var(--primary)" />
                            <h3>4+ Years Experience</h3>
                            <p>Expertise in both photography and equipment handling.</p>
                        </div>
                        <div className="feature-item">
                            <Clock size={32} color="var(--primary)" />
                            <h3>Quick Support</h3>
                            <p>Instant booking confirmation and support via WhatsApp.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <h2>Ready to capture your special moments?</h2>
                    <p>Contact us today for a custom quote or just walk in to our Erode studio.</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
