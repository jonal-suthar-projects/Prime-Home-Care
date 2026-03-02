import React from 'react';

const SchemaMarkup = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "HomeHealthCareService",
        "name": "Prime Home Care",
        "alternateName": "Prime Home Care LLC",
        "url": "https://primehomecarenj.com",
        "logo": "https://primehomecarenj.com/logo.png",
        "image": "https://primehomecarenj.com/assets/Haritha.jpg",
        "description": "Compassionate 24/7 non-medical senior home care services in Middlesex and Mercer Counties, NJ, including personal care, companion care, and post-hospital support.",
        "telephone": "+1-848-218-1140",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "South Brunswick",
            "addressRegion": "NJ",
            "postalCode": "08852",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "40.3806",
            "longitude": "-74.5465"
        },
        "areaServed": [
            { "@type": "City", "name": "South Brunswick, NJ" },
            { "@type": "City", "name": "North Brunswick, NJ" },
            { "@type": "City", "name": "New Brunswick, NJ" },
            { "@type": "City", "name": "Cranbury, NJ" },
            { "@type": "City", "name": "East Brunswick, NJ" },
            { "@type": "City", "name": "Monroe, NJ" },
            { "@type": "City", "name": "Old Bridge, NJ" },
            { "@type": "City", "name": "Piscataway, NJ" },
            { "@type": "City", "name": "Plainsboro, NJ" },
            { "@type": "City", "name": "South Plainfield, NJ" },
            { "@type": "City", "name": "Woodbridge, NJ" },
            { "@type": "City", "name": "Edison, NJ" },
            { "@type": "City", "name": "Highland Park, NJ" },
            { "@type": "City", "name": "Jamesburg, NJ" },
            { "@type": "City", "name": "Metuchen, NJ" },
            { "@type": "City", "name": "Middlesex, NJ" },
            { "@type": "City", "name": "Milltown, NJ" },
            { "@type": "City", "name": "Sayreville, NJ" },
            { "@type": "City", "name": "Princeton, NJ" },
            { "@type": "City", "name": "East Windsor, NJ" },
            { "@type": "City", "name": "Ewing, NJ" },
            { "@type": "City", "name": "Hamilton, NJ" },
            { "@type": "City", "name": "Lawrence Township, NJ" },
            { "@type": "City", "name": "West Windsor, NJ" },
            { "@type": "City", "name": "Hightstown, NJ" },
            { "@type": "City", "name": "Trenton, NJ" }
        ],
        "serviceOffered": [
            { "@type": "Service", "name": "Personal Care Assistance" },
            { "@type": "Service", "name": "Companion Care" },
            { "@type": "Service", "name": "Post-Hospital Recovery Care" },
            { "@type": "Service", "name": "24/7 In-Home Care" },
            { "@type": "Service", "name": "Bathing & Showering" },
            { "@type": "Service", "name": "Grooming & Dressing" },
            { "@type": "Service", "name": "Incontinence Care" },
            { "@type": "Service", "name": "Mobility Assistance" },
            { "@type": "Service", "name": "Feeding Assistance" },
            { "@type": "Service", "name": "Social Interaction" },
            { "@type": "Service", "name": "Light Housekeeping" },
            { "@type": "Service", "name": "Meal Preparation" },
            { "@type": "Service", "name": "Errands & Shopping" },
            { "@type": "Service", "name": "Transportation" },
            { "@type": "Service", "name": "Hospice Care Support" },
            { "@type": "Service", "name": "Hospital to Home" },
            { "@type": "Service", "name": "Alzheimer’s & Dementia Care" },
            { "@type": "Service", "name": "Adults With Disabilities" },
            { "@type": "Service", "name": "Diabetes Care" },
            { "@type": "Service", "name": "Parkinson's Disease Care" },
            { "@type": "Service", "name": "Palliative Care Support" },
            { "@type": "Service", "name": "Respite Care" },
            { "@type": "Service", "name": "24/7 Live-in Care" }
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/share/18WG1eQcvg/?mibextid=wwXIfr",
            "https://www.instagram.com/primehomecarenj?igsh=OXFmemZqYTA4dmxn",
            "https://www.linkedin.com/company/primehomecarenj/"
        ]
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    );
};

export default SchemaMarkup;
