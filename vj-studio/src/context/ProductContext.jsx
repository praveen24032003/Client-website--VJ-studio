import React, { createContext, useContext, useState } from 'react';
import { rentals } from '../data/rentals';
import { products } from '../data/products';
import { packages } from '../data/packages';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [rentalItems] = useState(rentals);
    const [saleItems] = useState(products);
    const [photoPackages] = useState(packages);

    const getRentalById = (id) => rentalItems.find(item => item.id === parseInt(id));
    const getProductById = (id) => saleItems.find(item => item.id === parseInt(id));
    const getPackageById = (id) => photoPackages.find(pkg => pkg.id === id);

    return (
        <ProductContext.Provider value={{
            rentalItems,
            saleItems,
            photoPackages,
            getRentalById,
            getProductById,
            getPackageById
        }}>
            {children}
        </ProductContext.Provider>
    );
};
