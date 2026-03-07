import React from 'react';

const SchemaMarkup = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
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
        "hasCertification": {
            "@type": "Certification",
            "name": "Home Care License",
            "certificationIdentification": "HP0424500",
            "issuedBy": {
                "@type": "GovernmentOrganization",
                "name": "New Jersey Division of Consumer Affairs"
            }
        },
        "areaServed": [
            { "@type": "AdministrativeArea", "name": "South Brunswick", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "North Brunswick", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "New Brunswick", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Cranbury", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "East Brunswick", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Monroe", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Old Bridge", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Piscataway", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Plainsboro", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "South Plainfield", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Woodbridge", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Edison", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Highland Park", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Jamesburg", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Metuchen", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Middlesex", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Milltown", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Sayreville", "containedInPlace": { "@type": "AdministrativeArea", "name": "Middlesex County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Princeton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Mercer County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "East Windsor", "containedInPlace": { "@type": "AdministrativeArea", "name": "Mercer County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Ewing", "containedInPlace": { "@type": "AdministrativeArea", "name": "Mercer County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Hamilton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Mercer County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Lawrence Township", "containedInPlace": { "@type": "AdministrativeArea", "name": "Mercer County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "West Windsor", "containedInPlace": { "@type": "AdministrativeArea", "name": "Mercer County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Hightstown", "containedInPlace": { "@type": "AdministrativeArea", "name": "Mercer County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } },
            { "@type": "AdministrativeArea", "name": "Trenton", "containedInPlace": { "@type": "AdministrativeArea", "name": "Mercer County", "containedInPlace": { "@type": "State", "name": "New Jersey" } } }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Home Care Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personal Care Assistance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Companion Care" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Post-Hospital Recovery Care" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 In-Home Care" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bathing & Showering" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Grooming & Dressing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Incontinence Care" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobility Assistance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Feeding Assistance" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Interaction" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Light Housekeeping" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Meal Preparation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Errands & Shopping" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transportation" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospice Care Support" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospital to Home" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Alzheimer's & Dementia Care" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Adults With Disabilities" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diabetes Care" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Parkinson's Disease Care" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Palliative Care Support" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Respite Care" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Live-in Care" } }
            ]
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "00:00"
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
