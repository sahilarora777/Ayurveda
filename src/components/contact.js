import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaClinicMedical } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/success');
    }
  };

  return (
    <div className="bg-green-50 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-12 max-w-5xl w-full">
        <h2 className="text-green-700 text-8xl font-extrabold text-center mb-12">Get in touch</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-green-600 text-2xl mt-1" />
              <div>
                <h3 className="text-3xl font-semibold">Contact Us:</h3>
                <p className="text-2xl gray-600 leading-relaxed">Ayurvedic Pri. Limit. Health Clinic<br />10 Sector, Jaipur, (Rajasthan) India</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-green-600 text-2xl mt-1" />
              <div>
                <h3 className="text-3xl font-semibold">Contact</h3>
                <p className="text-2xl gray-600">+91-925-6746259</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaClinicMedical className="text-green-600 text-2xl mt-1" />
              <div>
                <h3 className="text-3xl font-semibold">Clinic Timings</h3>
                <p className="text-2xl gray-600">10:00 am to 7:00 pm, Monday to Saturday</p>
              </div>
            </div>
          </div>
          <div className="bg-green-100 p-10 rounded-2xl shadow-inner">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-2xl gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                {errors.name && <p className="text-red-500 text-2xl mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-2xl gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                />
                {errors.email && <p className="text-red-500 text-2xl mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-2xl gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                ></textarea>
                {errors.message && <p className="text-red-500 text-2xl mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-3xl text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
