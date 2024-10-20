import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsSubmitted(true); // You can integrate an API call here

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl font-semibold">Get In Touch</h1>

      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-8 bg-neutral-800 rounded-lg shadow-md"
        >
          {/* Name Input */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-neutral-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-neutral-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Message Textarea */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-neutral-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
              rows="5"
              className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-neutral-50 rounded-md transition duration-200"
          >
            Send Message
          </button>
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
