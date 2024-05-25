import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const CardSellerComponent = ({ cardData }) => {
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
    <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
      <div className="flex flex-col justify-between w-2/3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">{city} : {address}</h2>
          <h3 className="text-xl font-bold text-gray-800">{description}</h3>
          <p className="text-gray-600">{`${bedrooms.$numberInt} beds, ${bathrooms.$numberInt} baths - ${area.$numberInt} sqft`}</p>
        </div>
        <div className="flex mt-4">
          <button className="flex items-center px-4 py-2 mr-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100">
            <FiEdit2 className="mr-2" />
            Edit
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 hover:bg-gray-100">
            <FiTrash2 className="mr-2" />
            Delete
          </button>
        </div>
      </div>
      <div className="w-1/3">
        <img className="w-full h-auto rounded-lg object-cover" src={imageUrl} alt="Property" />
      </div>
    </div>
  );
};

export default CardSellerComponent;
