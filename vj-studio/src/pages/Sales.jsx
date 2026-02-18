import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useProducts } from '../context/ProductContext';
import { Filter, Star, ShoppingCart } from 'lucide-react';
import '../styles/Rentals.css'; // Reuse rental styles for consistency

const Sales = () => {
    const { saleItems } = useProducts();
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Camera', 'Lighting', 'Accessories'];

    const filteredItems = filter === 'All'
        ? saleItems
        : saleItems.filter(item => item.category === filter);

    return (
        <div className="sales-page">
            <SEO
                title="Buy Cameras & Accessories"
                description="Shop for the latest cameras, lenses, and photography accessories at VJ Studio. Best prices and genuine products."
            />
            <div className="page-header">
                <div className="container">
                    <h1>Camera Store</h1>
                    <p>Buy the best photography equipment at competitive prices</p>
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
                                {item.inStock ? (
                                    <span className="stock-badge in-stock">In Stock</span>
                                ) : (
                                    <span className="stock-badge out-stock">Out of Stock</span>
                                )}
                            </div>
                            <div className="rental-info">
                                <div className="info-header">
                                    <span className="category-badge">{item.category}</span>
                                    <div className="rating">
                                        <Star size={14} fill="#FFD700" color="#FFD700" />
                                        <span>{item.rating}</span>
                                    </div>
                                </div>
                                <h3>{item.name}</h3>
                                <p className="price-sales">₹{item.price.toLocaleString()}</p>
                                <Link to={`/sales/${item.id}`} className="btn btn-primary btn-block">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="no-results">
                        <p>No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sales;
