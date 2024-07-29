import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';


const handleGitHubClick = () => {
  window.open('https://github.com/Eyoab11', '_blank', 'noopener,noreferrer');
};

const handleEmailClick = () => {
  window.location.href = 'mailto:eyoabamare3@gmail.com';
};

const handleLinkedInClick = () => {
  window.open('https://www.linkedin.com/in/eyoabamare', '_blank', 'noopener,noreferrer');
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message,
      };

      const response = await emailjs.send(
        'service_dnyxv58', // Replace with your emailjs service ID
        'template_0ibr1p1', // Replace with your emailjs template ID
        templateParams,
        '6TzVXzOCTngItaqso' // Replace with your emailjs user ID
      );

      if (response.status === 200) {
        setSent(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

        {sent ? (
          <p className="text-green-600 text-center mb-4">Message sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              className="w-full bg-black hover:bg-indigo-600 text-white px-4 py-2 rounded-md focus:outline-none"
            >
              Send Message
            </button>
          </form>



        )}
      </div>
      
      <div className='flex flex-row justify-evenly mt-10'>
            <button 
                onClick={handleGitHubClick} 
                className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md transition-transform duration-300 transform hover:scale-150 hover:shadow-lg'
                aria-label="GitHub"
            >
                <img 
                    src="/src/assets/github.svg" 
                    alt="GitHub" 
                    width={30} 
                    height={30} 
                />
            </button>
            <button 
                onClick={handleEmailClick} 
                className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md transition-transform duration-300 transform hover:scale-150 hover:shadow-lg'
                aria-label="Email"
            >
                <img 
                    src="/src/assets/gmail.svg" 
                    alt="Gmail" 
                    width={30} 
                    height={30} 
                />
            </button>
            <button 
                onClick={handleLinkedInClick} 
                className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md transition-transform duration-300 transform hover:scale-150 hover:shadow-lg'
                aria-label="LinkedIn"
            >
                <img 
                    src="/src/assets/linkedin.svg" 
                    alt="LinkedIn" 
                    width={30} 
                    height={30} 
                />
            </button>
        </div>

    </div>
  );
};

export default Contact;
