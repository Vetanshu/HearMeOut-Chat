import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-purple-600 mb-6">Contact Us</h1>
      <div className="max-w-lg">
        <p className="text-lg text-gray-700 mb-4">
          We'd love to hear from you! Reach out to us with any questions or feedback.
        </p>
        <div className="space-y-4">
          <p>Email: contact@hearmeout.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
