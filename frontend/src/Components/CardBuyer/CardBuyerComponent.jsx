import React from 'react';

const CardBuyerComponent = ({ cardData }) => {
    const {
        city,
        address,
        postalCode,
        area,
        type,
        bedrooms,
        bathrooms,
        schoolsNearby,
        hospitalsNearby,
        imageUrl,
        description,
        price,
    } = cardData;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 border-2">
            <img className="w-full h-48 object-cover p-2" src={imageUrl} alt="Property" />
            <div className="px-6">
                <div className="font-bold text-xl mb-2">{city}</div>
                <p className="text-gray-700 text-base">{address}</p>
                <p className="text-gray-700 text-base">Postal Code: {postalCode.$numberInt}</p>
            </div>
            <div className="px-6 pt-4">
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {area.$numberInt} sq ft
                </span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {bedrooms.$numberInt} Beds
                </span>
                <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {bathrooms.$numberInt} Baths
                </span>
            </div>
        </div>
    );
};

export default CardBuyerComponent;
