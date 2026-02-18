import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { Calendar, ShoppingCart, ArrowLeft, AlertCircle, Check } from 'lucide-react';
import '../styles/RentalDetail.css';

const RentalDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getRentalById } = useProducts();
    const { addToCart } = useCart();

    const [item, setItem] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [days, setDays] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
        const product = getRentalById(id);
        if (product) {
            setItem(product);
        } else {
            // navigate('/rentals'); // Optionally redirect if not found
        }
    }, [id, getRentalById]);

    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Inclusive

            if (diffDays < 1) {
                setError('End date must be after start date');
                setDays(0);
            } else if (diffDays > 7) {
                setError('Maximum rental period is 7 days');
                setDays(0);
            } else {
                setError('');
                setDays(diffDays);
                if (item) setTotalPrice(diffDays * item.price);
            }
        }
    }, [startDate, endDate, item]);

    const handleAddToCart = () => {
        if (!startDate || !endDate) {
            setError('Please select dates');
            return;
        }
        if (error) return;

        addToCart({
            ...item,
            type: 'rental',
            startDate,
            endDate,
            days,
            totalPrice // Snapshot price
        });

        navigate('/cart');
    };

    if (!item) return <div className="container section">Loading...</div>;

    // Date constraints
    const today = new Date();
    const minStart = new Date(today);
    minStart.setDate(today.getDate() + 2); // 2 days advance notice
    const minStartStr = minStart.toISOString().split('T')[0];

    return (
        <div className="rental-detail-page">
            <SEO
                title={item.name}
                description={`Rent ${item.name} at VJ Studio. Affordable daily rates and professional service.`}
            />
            <div className="container section">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <ArrowLeft size={18} /> Back to Rentals
                </button>

                <div className="grid grid-2 detail-container">
                    <div className="detail-image">
                        <img src={item.image} alt={item.name} />
                    </div>

                    <div className="detail-content">
                        <span className="category-badge">{item.category}</span>
                        <h1>{item.name}</h1>
                        <p className="price">₹{item.price} <span className="per-day">/ day</span></p>

                        <p className="description">{item.description}</p>

                        <div className="booking-widget">
                            <h3>Check Availability & Rate</h3>

                            <div className="date-inputs">
                                <div className="input-group">
                                    <label>Start Date</label>
                                    <input
                                        type="date"
                                        min={minStartStr}
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                    <small>Min 2 days advance</small>
                                </div>

                                <div className="input-group">
                                    <label>End Date</label>
                                    <input
                                        type="date"
                                        min={startDate || minStartStr}
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="error-msg">
                                    <AlertCircle size={16} /> {error}
                                </div>
                            )}

                            {days > 0 && !error && (
                                <div className="calculation-summary">
                                    <div className="calc-row">
                                        <span>Duration:</span>
                                        <span>{days} Days</span>
                                    </div>
                                    <div className="calc-row total">
                                        <span>Total Rent:</span>
                                        <span>₹{totalPrice}</span>
                                    </div>
                                    <div className="calc-row deposit">
                                        <span>Security Deposit (Refundable):</span>
                                        <span>₹250</span>
                                    </div>
                                </div>
                            )}

                            <button
                                className="btn btn-primary btn-block add-cart-btn"
                                onClick={handleAddToCart}
                                disabled={!startDate || !endDate || !!error}
                            >
                                <ShoppingCart size={20} /> Add to Cart
                            </button>

                            <div className="policy-note">
                                <Check size={14} color="var(--primary)" />
                                <span>Minimum rental: 1 day | Max: 7 days</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalDetail;
