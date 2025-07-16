import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });


  return (
    <div className="bg-[#faf6f2] min-h-screen w-full py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="text-[#2d4a3a] space-y-6">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your stories.
          </p>
          <div className="space-y-2">
            <p><strong>📍 Address:</strong> 4252 NE Beaumead St, Hillsboro, OR 97124-6842</p>
            <p><strong>📞 Phone:</strong> (201) 878-4506</p>
            <p><strong>📧 Email:</strong> <a href="mailto:danielnair861@gmail.com" className="underline">danielnair861@gmail.com</a></p>
          </div>
        </div>

        {/* Contact Form */}
        {/* <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-[#2d4a3a] mb-2">Send a Message</h2>
          <div>
            <label className="block text-sm font-medium text-[#2d4a3a]">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#2d4a3a]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2d4a3a]">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#2d4a3a]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#2d4a3a]">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-[#2d4a3a]"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#2d4a3a] text-white px-6 py-2 rounded-md hover:bg-[#3e5d4a] transition"
          >
            Send Message
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;
