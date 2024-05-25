import React, { useState } from 'react';

const RegisterComponent = ({ registerConfig }) => {
    const [formData, setFormData] = useState(
        registerConfig.reduce((acc, field) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
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
                        </div>
                    ))}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--500"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterComponent;
