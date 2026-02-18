import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
    const siteTitle = "VJ Studio | Professional Photography & Camera Rentals";
    const defaultDesc = "VJ Studio offers premium camera rentals, professional wedding photography, and equipment sales in Erode, Tamil Nadu. Book your shoot today!";
    const defaultKeywords = "camera rental erode, wedding photography tamil nadu, buy camera accessories, photography studio, vj studio";

    return (
        <Helmet>
            <title>{title ? `${title} | VJ Studio` : siteTitle}</title>
            <meta name="description" content={description || defaultDesc} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="twitter:card" content="summary_large_image" />
            <link rel="canonical" href={window.location.href} />
        </Helmet>
    );
};

export default SEO;
