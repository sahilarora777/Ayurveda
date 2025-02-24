import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://express-backend-f6ji.onrender.com/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(JSON.stringify(data));
        console.log('User login Successfully');
        alert('User login Successfully');
        localStorage.setItem('usertoken', data.token);
        navigate('/');
      } else {
        console.error('Login failed:', data);
        alert(data.message || 'User login Failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-2xl gray-700">Email</label>
            <br/>

            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-2xl gray-700">Password</label>
            <br/>
            <input
              type="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-[40vh] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-2xl whitespace-pre-wrap bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
          <button
            type="button"
            className="w-full p-3 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google icon" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </form>
        <p className="text-center text-2xl gray-700 mt-4">
          Don’t have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-green-500 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
  