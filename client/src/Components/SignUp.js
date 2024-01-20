import React, { useState } from 'react';
import { FaWindows } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    accountType: '',
    confirmPassword: '',
    otp: '',
  });

  const redirectToHome = () => {
    navigate('/'); // Use history.push to navigate to the home page
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendOTP = async () => {
    try {
      const response = await fetch('http://localhost:4500/api/v1/auth/sendotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('OTP sent successfully:', data.message);
        toast.success(data.message);
      } else {
        console.error('Failed to send OTP:', data.message);
        toast.success(data.message);
      }
    } catch (error) {
      console.error('Error sending OTP:', error.message);
      toast.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4500/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        
        console.log('Signup successful:', data.message);
        toast.success(data.message);
        redirectToHome();
        // Redirect to the login page after successful signup
        // You should replace '/login' with the actual route for your login page
        // You can use React Router's useHistory hook for this purpose
        // Example: history.push('/login');
      } else {
        console.error('Signup failed:', data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          {/* ... (existing form fields) */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder=""
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div>
          <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountType">
    Choose accountType:
  </label>
  <select
    id="accountType"
    name="accountType"
    className="w-full border rounded py-2 px-3"
    value={formData.accountType}
    onChange={handleChange}
  >
    <option value="Admin">Admin</option>
    <option value="Student">Student</option>
  </select>
</div>

          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
              OTP:
            </label>
            <input
              className="w-full border rounded py-2 px-3"
              type="text"
              id="otp"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
            />
          </div>

          <button
            type="button"
            onClick={handleSendOTP}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-2"
          >
            Send OTP
          </button>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
