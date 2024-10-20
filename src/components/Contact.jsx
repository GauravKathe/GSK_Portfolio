import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration
    emailjs
      .send('service_vv12fwj', 'template_z5046gf', formData, 'hHP_oxY_dMYMU_S0L')
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true);
          setError('');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError('Failed to send the message. Please try again later.');
        },
      );

    // Reset form after submission
    setFormData({
      from_name: '',
      from_email: '',
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
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              placeholder="< Enter your name = ' '>"
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
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              placeholder="< Enter your email = ' '>"
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
              placeholder="< Enter your message= ' '>"
              rows="5"
              className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500">{error}</p>}

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

      {/* Copyright Section with Email */}
      <div className="text-center text-neutral-400 mt-10">
        <p>&copy; {new Date().getFullYear()} Gaurav Kathe. All rights reserved.</p>
        <p>
          Contact: <a href="mailto:gauravkatheoff@gmail.com" className="text-teal-500 underline">gauravkatheoff@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
