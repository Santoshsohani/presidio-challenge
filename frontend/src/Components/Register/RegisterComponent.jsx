import React, { useState } from 'react';
import axios from 'axios';
import { registerUser } from '../../service/api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useNavigate } from "react-router-dom";

const RegisterComponent = ({ registerConfig }) => {


    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        registerConfig.reduce((acc, field) => {
            acc[field.name] = field.type === 'select' ? field.options[0] : '';
            return acc;
        }, {})
    );



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            console.log(response);
            if (response.status === 200 && formData && formData.role === 'buyer') {
                navigate('/buyer');
            }
            if (response.status === 200 && formData && formData.role === 'seller') {
                navigate('/seller');
            }
            toast.success('Registration successful!');
            
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                phoneNumber: '',
            })
            

        } catch (error) {
            console.log(error);
            toast.error('Registration failed. Please try again.');
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                phoneNumber: '',
            })
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center">Welcome to Rentify</h2>
                <p className="mb-6 text-sm text-center">Where Renting meets simplicity</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {registerConfig.map((field) => (
                        <div key={field.name}>
                            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                                {field.label}
                            </label>
                            {field.type === 'select' ? (
                                <select
                                    name={field.name}
                                    id={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    required={field.required}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                >
                                    {field.options.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    id={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                                />
                            )}
                        </div>
                    ))}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Register
                        </button>
                    </div>
                    <p className="text-sm text-center">Already have an account? <a href="/" className="text-purple-700 hover:text-purple-800">Login</a></p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterComponent;
