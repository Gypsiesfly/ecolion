"use client";

import StickyNav from "@/components/sticky-nav";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const resetForm = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const resetFormErrors = {
  name: false,
  email: false,
  phoneNumber: false,
  message: false,
};

export default function ContactPage() {
  const [contactForm, setContactForm] = useState(resetForm);
  const [formErrors, setFormErrors] = useState(resetFormErrors);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const NAME_REGEX = /^[a-zA-Z][a-zA-Z]{2,}$/;
  const PHONE_REGEX = /^\d{11}$/;
  const MESSAGE_REGEX = /^(?=.*[A-Za-z])[\w\s.,!?'"@#%&()\-:;/]{10,500}$/;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm({ ...contactForm, [e.target.id]: e.target.value });
  };

  //Validates user input fields
  const validateField = (field: string) => {
    if (field === "name") {
      const name = !NAME_REGEX.test(contactForm.name);
      setFormErrors({ ...formErrors, name });
    } else if (field === "email") {
      const email = contactForm.email.trim() ? true : false;
      setFormErrors({ ...formErrors, email });
    } else if (field === "phoneNumber") {
      const phoneNumber = !PHONE_REGEX.test(contactForm.phoneNumber);
      setFormErrors({ ...formErrors, phoneNumber });
    } else if (field === "message") {
      const message = !MESSAGE_REGEX.test(contactForm.message);
      setFormErrors({ ...formErrors, message });
    }
  };

  function validateForm() {
    ["name", "email", "phoneNumber", "message"].forEach((field) => {
      validateField(field);
    });
    return (
      !formErrors.name &&
      !formErrors.email &&
      !formErrors.phoneNumber &&
      !formErrors.message
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "applcation/json" },
        body: JSON.stringify(contactForm),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully");
        setContactForm(resetForm);
      } else {
        setStatus(`Error: ${res.statusText}`);
      }
    } catch (error) {
      console.log(error);
      setStatus("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <StickyNav />

      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-center text-black">
            CONTACT US
          </h1>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="bg-[#171e19] py-12 md:py-16 m-[10px] sm:m-[15px]">
        <div className="mx-auto px-8 w-full">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.8267!2d0.0489!3d51.4589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI3JzMyLjAiTiAwwrAwMicyOC4wIkU!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ecolion Housing Location"
              />
            </div>

            {/* Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-white text-sm mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  value={contactForm.name}
                  onChange={handleChange}
                  onInput={() => validateField("name")}
                  onBlur={() => validateField("name")}
                  placeholder="Jhon Smith"
                  required
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                />
                {formErrors.name && (
                  <p className="text-sm text-red-600">
                    Must be more than 2 characters, letters only
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                  placeholder="email@gmail.com"
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                />
                {formErrors.email && (
                  <p className="text-sm text-red-600">
                    Enter a valid email address
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-white text-sm mb-2"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={contactForm.phoneNumber}
                  onChange={handleChange}
                  onInput={() => validateField("phoneNumber")}
                  onBlur={() => validateField("phoneNumber")}
                  required
                  placeholder="Jhon Smith"
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder:text-white/50 py-3 px-0 focus:outline-none focus:border-white transition-colors"
                />
                {formErrors.phoneNumber && (
                  <p className="text-sm text-red-600">
                    Phone number must consist of 11 digits: 08120000000
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white text-sm mb-2"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  value={contactForm.message}
                  onChange={handleChange}
                  onInput={() => validateField("message")}
                  onBlur={() => validateField("message")}
                  required
                  rows={5}
                  placeholder="Type your message..."
                  className="w-full bg-transparent border border-white/30 text-white placeholder:text-white/50 py-3 px-4 focus:outline-none focus:border-white transition-colors resize-none"
                />
                {formErrors.message && (
                  <p className="text-sm text-red-600">
                    Message must be at least 10 characters
                  </p>
                )}
              </div>

              <button className="w-full bg-white text-black font-bold py-4 px-6 hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group">
                {!isLoading ? "Send message" : "Sending..."}
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
            {status && <p className="m2-3 text-red-600">{status}</p>}
          </div>
        </div>
      </section>

      {/* Urgent Assistance Section */}
      <section className="bg-[#fef5d0] m-[10px] sm:m-[15px] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Contact Info */}
            <div className="space-y-8 order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
                NEED URGENT ASSISTANCE?
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#fef5d0]" />
                  </div>
                  <p className="text-black text-lg">
                    enquiries@ecolionhousing.co.uk
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#fef5d0]" />
                  </div>
                  <p className="text-black text-lg">+447412979636</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-[#fef5d0]" />
                  </div>
                  <p className="text-black text-lg">
                    214 Wricklemarsh Road, Wricklemarsh Road
                    <br />
                    London, England, SE3 8DN
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="order-1 md:order-2 h-64 md:h-auto overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/Contact page/happy youths.jpg"
                alt="Ecolion Housing Assistance"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
