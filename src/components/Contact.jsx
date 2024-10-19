import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setIsSubmitted(true); // Set to true on successful submission
      setErrorMessage(''); // Reset any previous error messages

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('There was an error submitting your form. Please try again.'); // Show error message
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl font-semibold">Get In Touch</h1>

      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-8 bg-neutral-800 rounded-lg shadow-md"
        >
          {/* Form Fields */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-neutral-300">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-teal-600" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-neutral-300">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-teal-600" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-neutral-300">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-teal-600" rows="5" />
          </div>
          {/* Error Message Display */}
          {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
          <button type="submit" className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-neutral-50 rounded-md transition duration-200">Send Message</button>
        </form>
      ) : (
        <div className="text-center text-neutral-300">
          <h2 className="text-2xl my-10">Thank you for reaching out!</h2>
          <p>We will get back to you shortly.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
