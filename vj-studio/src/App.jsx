import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Rentals from './pages/Rentals';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import RentalDetail from './pages/RentalDetail';
import Sales from './pages/Sales';
import ProductDetail from './pages/ProductDetail';
import Booking from './pages/Booking';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="rentals" element={<Rentals />} />
        <Route path="rentals/:id" element={<RentalDetail />} />
        <Route path="sales" element={<Sales />} />
        <Route path="sales/:id" element={<ProductDetail />} />
        <Route path="booking" element={<Booking />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<div className="container" style={{ padding: '5rem' }}>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
