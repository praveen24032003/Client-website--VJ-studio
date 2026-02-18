import React from 'react';
import SEO from '../components/SEO';
import { Award, Users, Camera, Heart } from 'lucide-react';
import '../styles/Content.css';

const About = () => {
    return (
        <div className="content-page about-page">
            <SEO
                title="About Us"
                description="Learn about Vijay and VJ Studio. With 4+ years of experience and 1000+ happy customers, we are your trusted photography partner in Erode."
            />
            <div className="page-header">
                <div className="container">
                    <h1>About VJ Studio</h1>
                    <p>The story behind the lens</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2 about-intro">
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1554048612-387768052bf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Photographer" load="lazy" />
                    </div>
                    <div className="about-text">
                        <h2>Capturing Moments since 2019</h2>
                        <p>
                            Hi, I'm <strong>Vijay</strong>. With over <strong>4 years of experience</strong> in the photography field and camera sales,
                            I have successfully completed <strong>250+ functions</strong> including weddings, events, and personal shoots.
                        </p>
                        <p>
                            VJ Studio has served <strong>1000+ happy customers</strong> across Tamil Nadu. My passion is to provide accessible,
                            high-quality photography services and equipment to everyone. Whether you need a camera for a day or a photographer
                            for your life's biggest moments, I am here to ensure you get the best.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="stat-number">250+</span>
                                <span className="stat-label">Shoots Done</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">1000+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">4+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="values-section">
                    <h2 className="text-center">Our Values</h2>
                    <div className="grid grid-4">
                        <div className="value-card">
                            <Heart size={32} color="var(--primary)" />
                            <h3>Passion</h3>
                            <p>We love what we do, and it shows in our work.</p>
                        </div>
                        <div className="value-card">
                            <Camera size={32} color="var(--primary)" />
                            <h3>Quality</h3>
                            <p>Top-tier equipment and editing standards.</p>
                        </div>
                        <div className="value-card">
                            <Users size={32} color="var(--primary)" />
                            <h3>Service</h3>
                            <p>Customer satisfaction is our proven priority.</p>
                        </div>
                        <div className="value-card">
                            <Award size={32} color="var(--primary)" />
                            <h3>Reliability</h3>
                            <p>On-time delivery and transparent pricing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
