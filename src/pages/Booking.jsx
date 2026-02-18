import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { useBooking } from '../context/BookingContext';
import { Check, Calendar, MapPin, Camera } from 'lucide-react';
import '../styles/Booking.css';

const Booking = () => {
    const { photoPackages } = useProducts();
    const { addToCart } = useCart();
    const { createBookingItem } = useBooking();
    const navigate = useNavigate();

    const [selectedPkg, setSelectedPkg] = useState(null);
    const [eventType, setEventType] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const eventTypes = [
        'Wedding Photography',
        'Reception',
        'Birthday Party',
        'Corporate Event',
        'Baby Shower',
        'Model Photoshoot',
        'Other'
    ];

    const handleSelectPackage = (pkg) => {
        setSelectedPkg(pkg);
        // Scroll to form
        document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedPkg || !eventType || !date || !location) {
            setError('Please fill all fields and select a package');
            return;
        }

        const bookingItem = createBookingItem(selectedPkg, date, eventType, location);
        addToCart(bookingItem);
        navigate('/cart');
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="booking-page">
            <SEO
                title="Book Photoshoot"
                description="Book professional photography packages for Weddings, Receptions, Birthdays, and Events. VJ Studio provides premium services starting from ₹15,000."
            />
            <div className="page-header">
                <div className="container">
                    <h1>Capture Your Memories</h1>
                    <p>Professional photography services for your special occasions</p>
                </div>
            </div>

            <div className="container section">
                {/* Packages Grid */}
                <h2 className="section-title">Choose Your Package</h2>
                <div className="grid grid-3 package-grid">
                    {photoPackages.map(pkg => (
                        <div
                            key={pkg.id}
                            className={`package-card ${selectedPkg?.id === pkg.id ? 'selected' : ''}`}
                        >
                            <div className="package-header">
                                <h3>{pkg.name}</h3>
                                <div className="features-tags">
                                    {pkg.features.map((f, i) => (
                                        <span key={i}>{f}</span>
                                    ))}
                                </div>
                            </div>

                            <ul className="package-features">
                                {pkg.deliverables.map((item, idx) => (
                                    <li key={idx}>
                                        <Check size={16} color="var(--primary)" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="recommended">Best for: {pkg.recommendedFor}</p>

                            <button
                                className={`btn btn-block ${selectedPkg?.id === pkg.id ? 'btn-primary' : 'btn-outline-dark'}`}
                                onClick={() => handleSelectPackage(pkg)}
                            >
                                {selectedPkg?.id === pkg.id ? 'Selected' : 'Select Package'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Booking Form */}
                <div id="booking-form" className="booking-form-section">
                    <div className="form-container">
                        <h2>Complete Your Enquiry</h2>
                        <p>Tell us about your event to get a custom quote.</p>

                        {error && <div className="error-msg">{error}</div>}

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Selected Package</label>
                                <div className="selected-package-display">
                                    {selectedPkg ? (
                                        <>
                                            <strong>{selectedPkg.name}</strong>
                                            <span><Check size={14} /> Selected</span>
                                        </>
                                    ) : (
                                        <span className="placeholder-text">Please select a package above</span>
                                    )}
                                </div>
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label><Camera size={16} /> Event Type</label>
                                    <select
                                        value={eventType}
                                        onChange={(e) => setEventType(e.target.value)}
                                        required
                                    >
                                        <option value="">Select Event Type</option>
                                        {eventTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label><Calendar size={16} /> Event Date</label>
                                    <input
                                        type="date"
                                        min={today}
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label><MapPin size={16} /> Location (City/District)</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Erode, Salem, Coimbatore"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-note">
                                <p>* Travel charges may apply for locations outside Erode.</p>
                                <p>* Printed albums available on request (extra charges apply).</p>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block submit-btn">
                                Add Enquiry to Cart
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
