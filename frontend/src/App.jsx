import React from 'react';
import CardBuyerComponent from './Components/CardBuyer/CardBuyerComponent';
import CardSellerComponent from './Components/CardSeller/CardSellerComponent';
const propertyData = {
  "_id": { "$oid": "66522b2c7013cb9141e974f5" },
  "city": "Los Angeles",
  "address": "456 Suncity",
  "postalCode": { "$numberInt": "90001" },
  "area": { "$numberInt": "2000" },
  "type": "sale",
  "bedrooms": { "$numberInt": "4" },
  "bathrooms": { "$numberInt": "3" },
  "schoolsNearby": "Highland High School",
  "hospitalsNearby": "St. Mary Medical Center",
  "imageUrl": "https://tse2.mm.bing.net/th?id=OIP.1cXyJGkZJl9T5vVvgAcd0wHaEh&pid=Api&P=0&h=180",
  "description": "Spacious family home with a backyard pool",
  "price": { "$numberInt": "600000" },
  "createdAt": { "$date": { "$numberLong": "1716661036139" } },
  "updatedAt": { "$date": { "$numberLong": "1716661508456" } },
  "__v": { "$numberInt": "0" },
  "owner": { "$oid": "614afdd0e7e9b9a8eabc8d32" }
};

const App = () => (
  <div className="p-4 flex flex-wrap justify-center">
    <CardSellerComponent cardData={propertyData} />
  </div>
);

export default App;
