import React, { useEffect, useState } from 'react';
import NavbarComponent from '../Components/Navbar/NavbarComponent';
import CardBuyerComponent from '../Components/CardBuyer/CardBuyerComponent';
import axios from 'axios';

const BuyerPropertyPage = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/seller/properties');
        setCardData(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchData();
  }, []);

  console.log(cardData);

  return (
    <div>
      <NavbarComponent />

      <div className='flex flex-wrap'>
        {cardData.map((card) => (
        <CardBuyerComponent key={card._id} cardData={card} />
      ))}
      </div>
      
    </div>
  );
};

export default BuyerPropertyPage;
