import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/index.css';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { BookingProvider } from './context/BookingContext';


const rootElement = document.getElementById('root');
if (!rootElement) {
  document.body.innerHTML = "<h1>FATAL ERROR: 'root' element not found in index.html</h1>";
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <ProductProvider>
          <CartProvider>
            <BookingProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </BookingProvider>
          </CartProvider>
        </ProductProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
