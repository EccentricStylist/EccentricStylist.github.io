import React, { useState } from 'react';

function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });

  // State to track remaining characters
  const [remainingChars, setRemainingChars] = useState(1000);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent! Here is your message: \n\n${JSON.stringify(formData, null, 2)}`);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      body: '',
    });
    setRemainingChars(1000);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Update remaining characters for the body field
    if (name === 'body') {
      setRemainingChars(1000 - value.length);
    }
  };

  return (
    <div
      className="max-w-2xl mx-auto p-6 bg-gray-800 shadow-md rounded-md mt-6"
      style={{ fontFamily: "'Chelsea Market', cursive" }}
    >
      <h1 className="text-3xl font-bold text-center" style={{ color: '#f8c4ff' }}>
        Contact
      </h1>
      <p className="text-center text-lg mb-6">
        <span style={{ color: '#f8c4ff' }}>Interested in getting in touch? Fill out the form below or email me at{' '}</span>
        <span style={{ color: '#00ffff' }}>eccentricstylist@gmail</span>
        <span style={{ color: '#f8c4ff' }}>[dot]</span>
        <span style={{ color: '#00ffff' }}>com</span>!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium"
            style={{ color: '#f8c4ff' }}
          >
            Name <span style={{ color: '#ff0000' }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-gray-700"
            style={{ color: '#f8c4ff' }}
            placeholder="Your Name (Required)"
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium"
            style={{ color: '#f8c4ff' }}
          >
            Email <span style={{ color: '#ff0000' }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-gray-700"
            style={{ color: '#f8c4ff' }}
            placeholder="Your Email (Required)"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium"
            style={{ color: '#f8c4ff' }}
          >
            Subject <span style={{ color: '#ff0000' }}>*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-gray-700"
            style={{ color: '#f8c4ff' }}
            placeholder="Subject (Required)"
          />
        </div>

        {/* Body Field */}
        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium"
            style={{ color: '#f8c4ff' }}
          >
            Message <span style={{ color: '#ff0000' }}>*</span>
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
            maxLength={1000}
            rows="5"
            className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-gray-700"
            style={{ color: '#f8c4ff' }}
            placeholder="Your Message (Required, 1000 characters max)"
          ></textarea>
          <p className="text-sm mt-1" style={{ color: '#f8c4ff' }}>
            {remainingChars} characters remaining
          </p>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-2 rounded-md hover:bg-pink-600 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
