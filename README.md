# VJ Studio - Professional Photography & E-commerce Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A modern, responsive React application for **VJ Studio**, a professional photography business based in Erode, Tamil Nadu. This platform enables users to rent camera equipment, purchase photography gear, and book photoshoot packages.

## 🚀 Features

### 📸 Core Services
1.  **Camera Rental System**:
    -   Browse cameras, lenses, and equipment.
    -   Real-time price calculation based on rental duration.
    -   Date picker with availability logic (min 2 days advance booking).

2.  **Equipment Sales**:
    -   Catalog of cameras and accessories.
    -   Product details with stock status.
    -   Cart management with quantity selectors.

3.  **Photoshoot Booking**:
    -   Packages: Basic, Standard, Premium.
    -   Enquiry form for Event Type, Date, and Location.

### 🛒 E-commerce Features
-   **Universal Cart**: Manages Rentals, Sales, and Bookings in a single cart.
-   **Smart WhatsApp Integration**: 
    -   Direct checkout redirection to WhatsApp.
    -   **Context-Aware Messages**: Generates specific templates for Rentals (with dates/prices), Bookings (Quote Requests), and Sales.
-   **No Backend**: Fully static frontend using Context API for state management.

### 🔍 SEO & Accessibility
-   **On-Page SEO**: Dynamic Title and Meta Tags for every page using `react-helmet-async`.
-   **Mobile-First Design**: Fully responsive layout optimized for mobile (360px+), tablets, and desktops.
-   **Performance**: Lazy loading for images and optimized assets.
-   **Semantic HTML**: Proper heading hierarchy and ARIA labels.

## 🛠️ Tech Stack

-   **Frontend**: React 18 + Vite
-   **Routing**: React Router DOM v6
-   **State Management**: Context API
-   **SEO**: React Helmet Async
-   **Styling**: Pure CSS (CSS Variables, Responsive Grid/Flexbox)
-   **Icons**: Lucide React

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components (Navbar, Footer, Layout)
├── context/        # State management (Product, Cart, Booking contexts)
├── data/           # Static data files (Rentals, Products, Packages)
├── pages/          # Page components (Home, Rentals, Sales, Cart, etc.)
├── styles/         # CSS files (Global and Component-specific)
├── utils/          # Utility functions
├── App.jsx         # Main routing setup
└── main.jsx        # Entry point with Providers
```

## ⚡ Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 📱 Contact

-   **Business Owner**: Vijay
-   **Phone**: +91 9750181649
-   **Location**: Valaikara Street, Erode, Tamil Nadu
