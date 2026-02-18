import React from 'react';
import '../styles/Content.css';

const Gallery = () => {
    // Placeholder images from Unsplash
    const images = [
        "https://images.unsplash.com/photo-1511285560982-1356c11d4606?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    ];

    return (
        <div className="content-page gallery-page">
            <div className="page-header">
                <div className="container">
                    <h1>Our Portfolio</h1>
                    <p>A glimpse into our world of photography</p>
                </div>
            </div>

            <div className="container section">
                <div className="gallery-grid">
                    {images.map((img, idx) => (
                        <div key={idx} className="gallery-item">
                            <img src={img} alt={`Gallery ${idx + 1}`} />
                            <div className="overlay">
                                <span>View Full Size</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <p className="note">More images will be updated soon...</p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
