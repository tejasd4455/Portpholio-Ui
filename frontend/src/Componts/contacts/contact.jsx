import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState({ success: false, message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form),
        mode: "cors",
        credentials: "omit"
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (res.ok) {
        setResult({ success: true, message: "Message sent successfully!" });
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setResult({ success: false, message: data.error || "Something went wrong!" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        setResult({ success: false, message: "Cannot connect to server. Please check if backend is running on port 5000." });
      } else {
        setResult({ success: false, message: "Server not responding! Please try again." });
      }
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen px-2 sm:px-4 md:px-6 lg:px-10 pt-8 sm:pt-10" id="contact">
      <h2 className="text-center uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-extrabold mb-1 animate-fade-in">
        Contact Us
      </h2>
      <p className="text-gray-500 font-bold text-xs sm:text-sm text-center mb-6 sm:mb-8">Get in Touch</p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
        {/* Left Side */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12 border-r-0 md:border-r-2 border-gray-600 pr-0 md:pr-4 pl-0 md:pl-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0f0f3e] flex items-center gap-2 animate-slide-up">
            Send us a message <span>📨</span>
          </h3>
          <p className="text-black text-sm sm:text-base leading-relaxed">
            Hi, I'm Tejas Deshmukh — a passionate Frontend Web Developer...
          </p>
          <div className="space-y-3 sm:space-y-4 font-normal text-black">
            <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <Mail className="text-indigo-600 flex-shrink-0" /> tejadeshmukh03@gmail.com
            </p>
            <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <Phone className="text-indigo-600 flex-shrink-0" /> +91 9881073346
            </p>
            <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
              <MapPin className="text-indigo-600 flex-shrink-0" /> Ahmadnagar, Maharashtra, India
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="p-2 sm:p-4 space-y-3 sm:space-y-4">
          <InputField label="Your Name" name="name" value={form.name} onChange={handleChange} required />
          <InputField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
          <InputField label="Your Email" name="email" type="email" value={form.email} onChange={handleChange} required />
          <TextAreaField label="Write your message here" name="message" value={form.message} onChange={handleChange} required />

          <button type="submit" className="w-full sm:w-auto bg-[#212EA0] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-[#000f38] hover:scale-105 transition-all duration-200 text-sm sm:text-base font-medium">
            Submit now →
          </button>

          {result.message && (
            <div
              className={`${
                result.success ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
              } border rounded-lg p-2 flex items-center gap-2 shadow-md`}
            >
              {result.success ? (
                <FaCheckCircle className="text-green-600 text-xl" />
              ) : (
                <FaTimesCircle className="text-red-600 text-xl" />
              )}
              <span className="text-sm font-medium">{result.message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

const InputField = ({ label, name, type = "text", value, onChange, required }) => (
  <div>
    <label className="block text-xs sm:text-sm font-medium text-[#000000] mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter your ${label.toLowerCase()}`}
      required={required}
      className="w-full bg-[#d7d7d7] px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base transition-all duration-200"
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange, required }) => (
  <div>
    <label className="block text-xs sm:text-sm font-medium text-[#000000] mb-1">{label}</label>
    <textarea
      name={name}
      rows="4"
      value={value}
      onChange={onChange}
      placeholder={`Enter your ${label.toLowerCase()}`}
      required={required}
      className="w-full bg-[#d7d7d7] px-3 sm:px-4 py-2 sm:py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base transition-all duration-200 resize-none"
    />
  </div>
);

export default ContactSection;
