export const RegisterConfig = [
    { name: 'firstName', type: 'text', label: 'First Name', placeholder: 'Enter your first name', required: true },
    { name: 'lastName', type: 'text', label: 'Last Name', placeholder: 'Enter your last name', required: true },
    { name: 'email', type: 'email', label: 'Email', placeholder: 'Enter your email', required: true },
    { name: 'phone', type: 'text', label: 'Phone', placeholder: 'Enter your phone number', required: true },
    { name: 'password', type: 'password', label: 'Password', placeholder: 'Enter your password', required: true },
    { name: 'role', type: 'select', label: 'Role', options: ['buyer', 'seller'], required: true }
];
