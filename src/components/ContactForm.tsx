import emailjs from "@emailjs/browser";
import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm: React.FC = () => {
  useEffect(() => emailjs.init("Y-5jNsscllwNC4mmg"), []);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("service_e3cdzuj", "template_e71bqso", {
        to_name: formData.name,
        from_email: formData.email, // This is the sender's email
        message: formData.message,
      })
      .then(() => {
        toast.success("Email Sent Successfully", {
          autoClose: 1500,
        });
        setFormData({
          email: "",
          message: "",
          name: "",
        });
      })
      .catch((err: any) => {
        toast.error("Couldn't Sent Email try again", {
          autoClose: 1500,
        });
        console.log("er", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="bg-white">
      <ToastContainer />
      <div className="py-8 lg:py-16 px-4 max-w-screen-md">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Your name"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
              rows={6}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`py-3 px-5 text-sm font-bold text-center text-white rounded-lg bg-maingrey sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-offset-white ${
              loading ? "bg-maingrey/30" : ""
            }`}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
