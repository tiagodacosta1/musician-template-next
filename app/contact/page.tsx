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
    setContactForm((prevForm) => ({ ...prevForm, [name]: value }));
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
    <div>
      {/* Banner Image */}
      <div className="relative w-full w-11/12 h-[60vh] mx-auto mb-12">
        <Image
          src="/Aline/IMG_2472.JPEG"
          alt="Aline's biography image"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Title */}
      <div className="font-merriweather text-4xl text-center uppercase my-8 text-[#4b6043]">
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
              rows={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#4b6043] text-white text-lg font-semibold py-3 rounded-lg hover:bg-[#658354] focus:outline-none focus:ring-2 focus:ring-[#658354]"
          >
            Send Message
          </button>
        </form>

        {formStatus && (
          <p className="mt-4 text-center text-lg font-montserrat text-[#4b6043]">
            {formStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
