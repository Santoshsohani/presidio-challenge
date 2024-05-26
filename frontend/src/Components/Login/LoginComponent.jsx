import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../../service/api';
import { useNavigate } from 'react-router-dom'; 

const LoginComponent = ({ loginConfig }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        loginConfig.reduce((acc, field) => {
            acc[field.name] = '';
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
            const response = await loginUser(formData);
            
            if (response.token) {
               
                toast.success('Login successful!');
                setFormData({
                    email: '',
                    password: ''
                });

               setTimeout(() => {
                    if (response.user.role === 'buyer') {
                        navigate('/buyer');
                    } else {
                        navigate('/seller');
                    }
                }, 2000);
               


            } else {
                toast.error('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('Login failed. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <p className="mb-6 text-md text-center md:text-base">Welcome back! Please login to your account.</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {loginConfig.map((field) => (
                        <div key={field.name}>
                            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                id={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                required={field.required}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm md:text-base"
                            />
                        </div>
                    ))}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 md:text-base"
                        >
                            Login
                        </button>
                    </div>
                    <div>
                        <p className="text-sm text-center md:text-base">
                            Don't have an account?{' '}
                            <a href="/register" className="text-purple-700 hover:text-purple-800">
                                Register
                            </a>
                        </p>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginComponent;
