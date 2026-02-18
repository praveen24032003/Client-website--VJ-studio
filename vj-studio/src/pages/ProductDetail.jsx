import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { ShoppingCart, ArrowLeft, Minus, Plus, Star } from 'lucide-react';
import '../styles/RentalDetail.css'; // Reuse common detail styles

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getProductById } = useProducts();
    const { addToCart } = useCart();

    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const product = getProductById(id);
        if (product) {
            setItem(product);
        }
    }, [id, getProductById]);

    const handleAddToCart = () => {
        addToCart({
            ...item,
            type: 'sale',
            quantity
        });
        navigate('/cart');
    };

    if (!item) return <div className="container section">Loading...</div>;

    return (
        <div className="rental-detail-page">
            <div className="container section">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <ArrowLeft size={18} /> Back to Store
                </button>

                <div className="grid grid-2 detail-container">
                    <div className="detail-image">
                        <img src={item.image} alt={item.name} />
                    </div>

                    <div className="detail-content">
                        <div className="info-header">
                            <span className="category-badge">{item.category}</span>
                            <div className="rating">
                                <Star size={16} fill="#FFD700" color="#FFD700" />
                                <span>{item.rating} Ratings</span>
                            </div>
                        </div>
                        <h1>{item.name}</h1>
                        <p className="price">₹{item.price.toLocaleString()}</p>

                        <p className="description">{item.description}</p>

                        <div className="booking-widget">
                            <h3>Order Details</h3>

                            <div className="quantity-selector" style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Quantity</label>
                                <div className="qty-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <button
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                        className="qty-btn"
                                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd', background: 'white' }}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span style={{ fontSize: '1.2rem', fontWeight: '600', minWidth: '30px', textAlign: 'center' }}>{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(q => q + 1)}
                                        className="qty-btn"
                                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd', background: 'white' }}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>

                            <div className="calculation-summary">
                                <div className="calc-row total">
                                    <span>Total Amount:</span>
                                    <span>₹{(item.price * quantity).toLocaleString()}</span>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary btn-block add-cart-btn"
                                onClick={handleAddToCart}
                                disabled={!item.inStock}
                            >
                                <ShoppingCart size={20} /> {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
