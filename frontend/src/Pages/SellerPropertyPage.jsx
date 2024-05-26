import React,{useEffect,useState} from 'react'
import NavbarComponent from '../Components/Navbar/NavbarComponent'
import CardSellerComponent from '../Components/CardSeller/CardSellerComponent'
import axios from 'axios'

import { useNavigate } from "react-router-dom";

const SellerPropertyPage = () => {

  const navigate = useNavigate();

  const [propertyData, setPropertyData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/seller/properties');
        setPropertyData(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <NavbarComponent /> 
      <div className='flex justify-between m-2'>
        <div className='text-xl font-semibold'>Your Property</div>
        <button className='text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center' onClick={() => navigate('/add-property')}>Add Property</button>
      </div>
      <div className='flex flex-col justify-center'>

        {propertyData.map((card) => ( 
          <CardSellerComponent key={card._id} cardData={card} />
        ))}
      </div>
    </div>
  )
}

export default SellerPropertyPage
