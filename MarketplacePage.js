import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import Navbar from '../components/Navbar';

const MarketplacePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error("Failed to load products");
            }
        };
        loadProducts();
    }, []);

    const handleBuy = (productName) => {
        alert(`Thank you for purchasing ${productName}! 🌿\nThis is a simulation, no money was charged.`);
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-success">🌿 Eco-Marketplace</h2>
                    <p className="text-muted">Sustainable products to help you reduce your footprint.</p>
                </div>

                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-3 mb-4">
                            <div className="card h-100 shadow-sm border-0">
                                {/* Product Image */}
                                <img 
                                    src={product.imageUrl} 
                                    className="card-img-top" 
                                    alt={product.name} 
                                    style={{ height: '200px', objectFit: 'contain', padding: '20px' }}
                                />
                                
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                                    
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <span className="fw-bold fs-5 text-primary">${product.price}</span>
                                        <button 
                                            onClick={() => handleBuy(product.name)} 
                                            className="btn btn-outline-success btn-sm"
                                        >
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MarketplacePage;