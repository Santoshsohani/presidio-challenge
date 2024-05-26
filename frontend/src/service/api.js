// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api/user';

// Register a new user
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

// Login a user
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            throw new Error('Invalid credentials');
        } else {
            throw new Error('Login failed. Please try again later.');
        }
    }
};


// Get all properties
export const getProperties = async (token) => {
    const response = await axios.get(`${API_URL}/properties`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// Add a new property
export const addProperty = async (propertyData, token) => {
    const response = await axios.post(`${API_URL}/properties`, propertyData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// Update a property
export const updateProperty = async (id, propertyData, token) => {
    const response = await axios.put(`${API_URL}/properties/${id}`, propertyData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// Delete a property
export const deleteProperty = async (id, token) => {
    const response = await axios.delete(`${API_URL}/properties/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};


