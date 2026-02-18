import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useProducts } from '../context/ProductContext';
import { Filter } from 'lucide-react';
import '../styles/Rentals.css';

const Rentals = () => {
    const { rentalItems } = useProducts();
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Camera', 'Lens', 'Equipment'];

    const filteredItems = filter === 'All'
        ? rentalItems
        : rentalItems.filter(item => item.category === filter);

    return (
        <div className="rentals-page">
            <SEO
                title="Rent Cameras & Equipment"
                description="Affordable camera rentals in Erode. Canon DSLRs, Lenses, Lights, and Tripods available for daily rent with flexible terms."
            />
            <div className="page-header">
                <div className="container">
                    <h1>Rent Premium Gear</h1>
                    <p>Top-quality cameras and equipment for your professional needs</p>
                </div>
            </div>

            <div className="container section">
                {/* Filter Section */}
                <div className="filter-bar">
                    <div className="filter-label">
                        <Filter size={20} />
                        <span>Filter by:</span>
                    </div>
                    <div className="filter-options">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-3 rental-grid">
                    {filteredItems.map(item => (
                        <div key={item.id} className="rental-card">
                            <div className="rental-image">
                                <img src={item.image} alt={item.name} />
                                <span className="price-tag">₹{item.price} / day</span>
                            </div>
                            <div className="rental-info">
                                <span className="category-badge">{item.category}</span>
                                <h3>{item.name}</h3>
                                <p className="description">{item.description}</p>
                                <Link to={`/rentals/${item.id}`} className="btn btn-primary btn-block">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="no-results">
                        <p>No items found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Rentals;
