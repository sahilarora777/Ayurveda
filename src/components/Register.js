import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    if (!formData.dob) {
      tempErrors.dob = "Date of Birth is required";
      isValid = false;
    }
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('https://express-backend-f6ji.onrender.com/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        console.log('User Registered Successfully, token is stored in local storage', data.token);
        alert('User Registered Successfully, token is stored in local storage');
        navigate('/');
      } else {
        console.error('Registration failed:', data);
        alert(data.message || 'User Registration Failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-6">Sign up</h2>
        {['name', 'email', 'password', 'dob', 'phone'].map((field) => (
          <div key={field} className="mb-8"> {/* Increased margin here */}
            <input
              type={field === 'email' ? 'email' : field === 'password' ? 'password' : field === 'dob' ? 'date' : field === 'phone' ? 'number' : 'text'}
              value={formData[field]}
              name={field}
              onChange={handleChange}
              placeholder={`Enter your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" // Increased padding here
            />
            {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
          </div>
        ))}
        <button type="submit" className="w-full bg-green-500 text-4xl text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
