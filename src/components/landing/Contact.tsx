import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(() => {
        setMessage("Message sent successfully!");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", textarea: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
      });
  };

  return (
    <div>
      <section id="contact" className="bg-white min-h-screen h-full">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {/* Other content */}
          <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
            <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-6">
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="name"
                    className="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Your name"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="email"
                    className="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Your email address"
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="textarea"
                    className="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <textarea
                    id="textarea"
                    name="textarea"
                    placeholder="Write your message..."
                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                    value={formData.textarea}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-buttonColor text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
            {message && <p className="mt-4 text-center">{message}</p>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
