"use client";

import { useState } from "react";
import Image from "next/image";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const data = await res.json();
      if (res.status === 200) {
        setFormStatus("Message Sent! Thank you for reaching out.");
        setContactForm({ name: "", email: "", message: "" });
      } else {
        setFormStatus("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("There was an error sending your message.");
    }
  };

  return (
    <div className="relative w-full lg:w-3/4 mx-auto mb-8">
      {/* Banner Image */}
      <div className="relative h-[60vh] mb-8">
        <Image
          src="/Aline/IMG_2469.JPEG" // Change image path as needed
          alt="Contact Aline"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Title */}
      <div className="font-merriweather text-4xl font-bold text-center uppercase my-8 text-[#4b6043]">
        Get in Touch
      </div>

      {/* Contact Form Section */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8 border-2 border-[#658354]">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lg font-montserrat font-semibold text-[#4b6043]"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactForm.name}
              onChange={handleInputChange}
              className="w-full p-4 mt-2 border-2 border-[#658354] rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#4b6043]"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-montserrat font-semibold text-[#4b6043]"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactForm.email}
              onChange={handleInputChange}
              className="w-full p-4 mt-2 border-2 border-[#658354] rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#4b6043]"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-montserrat font-semibold text-[#4b6043]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={contactForm.message}
              onChange={handleInputChange}
              className="w-full p-4 mt-2 border-2 border-[#658354] rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#4b6043]"
              rows={6}
              required
            />
          </div>

          {/* Send Message Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#4b6043] text-white text-lg font-montserrat rounded-lg hover:bg-[#658354] transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#4b6043] border-2 border-[#658354]"
          >
            Send Message
          </button>
        </form>

        {formStatus && (
          <div className="mt-6 text-center text-lg font-montserrat font-semibold text-[#658354]">
            {formStatus}
          </div>
        )}
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-[#4b6043] font-montserrat text-lg">
          Want to stay updated? Follow me on social media.
        </p>

        {/* Social Media Links (Icons) */}
        <div className="flex justify-center mt-6 space-x-8">
          <a
            href="https://facebook.com" // Replace with actual link
            className="text-blue-600 hover:text-blue-700 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://instagram.com" // Replace with actual link
            className="text-pink-600 hover:text-pink-700 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://linkedin.com" // Replace with actual link
            className="text-blue-800 hover:text-blue-900 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
