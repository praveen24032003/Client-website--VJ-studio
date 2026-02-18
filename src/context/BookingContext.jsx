import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
    const [currentBooking, setCurrentBooking] = useState(null);

    // Helper to format booking for cart
    const createBookingItem = (pkg, date, type, location) => {
        return {
            id: `booking-${Date.now()}`,
            type: 'booking',
            name: `Photoshoot: ${pkg.name}`,
            price: 0, // Price not shown as per requirements
            details: {
                packageId: pkg.id,
                packageName: pkg.name,
                date,
                eventType: type,
                location
            },
            image: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' // Generic booking image
        };
    };

    return (
        <BookingContext.Provider value={{
            currentBooking,
            setCurrentBooking,
            createBookingItem
        }}>
            {children}
        </BookingContext.Provider>
    );
};
