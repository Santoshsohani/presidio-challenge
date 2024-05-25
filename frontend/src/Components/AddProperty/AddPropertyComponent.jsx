import React, { useState } from 'react';

const AddPropertyComponent = ({ addPropertyConfig }) => {
    const [formData, setFormData] = useState(
        addPropertyConfig.reduce((acc, field) => {
            acc[field.name] = field.type === 'file' ? null : '';
            return acc;
        }, {})
    );

    console.log(formData);

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSubmit.append(key, formData[key]);
        });
        console.log(formDataToSubmit);
        // Add your API call logic here to submit the form data
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
                <h2 className="text-2xl font-semibold text-center md:text-3xl">Propertry Details</h2>
                <p className="mb-6 text-sm text-center md:text-base">Fill in the details to add/edit a  property</p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {addPropertyConfig.map((field) => (
                        <div key={field.name}>
                            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                                {field.label}
                            </label>
                            {field.type === 'file' ? (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    id={field.name}
                                    onChange={handleChange}
                                    required={field.required}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm md:text-base"
                                />
                            ) : (
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
                            )}
                        </div>
                    ))}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 md:text-base"
                        >
                            Add Property
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPropertyComponent;
