import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Wave from '../../assets/pae-cover-logo-banner-1.jpeg'
import {motion} from 'framer-motion'
const AuthCard = ({ initialMode = "login" }) => {
  const [mode, setMode] = useState(initialMode);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (mode === "signup" && !form.name.trim()) e.name = "Name required";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) e.email = "Valid email required";
    if (form.password.length < 6) e.password = "Password must be ≥ 6 chars";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setErrors({});
    setMsg("");
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);

    try {
      setLoading(true);
      const data = mode === "signup" ? await registerUser(form) : await loginUser(form);
      setMsg(data.message || (mode === "signup" ? "Account created!" : "Login successful!"));
    } catch (err) {
      setMsg(err?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative backdrop-blur-lg rounded-3xl p-6 w-full max-w-[360px] flex flex-col items-center text-center shadow-lg"
    >
      <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 drop-shadow-lg">
        {mode === "signup" ? "Create Account" : "Welcome Back"}
      </h3>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
        {mode === "signup" && (
          <div className="text-left">
            <label className="text-sm text-gray-300">Full Name</label>
            <motion.input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Enter your full name"
              className={`w-full mt-1 p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none transition-all ${
                errors.name ? "ring-2 ring-red-400" : ""
              }`}
              whileFocus={{ scale: 1.02 }}
            />
            {errors.name && <p className="text-xs text-red-300 mt-1">{errors.name}</p>}
          </div>
        )}

        <div className="text-left">
          <label className="text-sm text-gray-300">Email</label>
          <motion.input
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
            placeholder="Enter your email"
            className={`w-full mt-1 p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none transition-all ${
              errors.email ? "ring-2 ring-red-400" : ""
            }`}
            whileFocus={{ scale: 1.02 }}
          />
          {errors.email && <p className="text-xs text-red-300 mt-1">{errors.email}</p>}
        </div>

        <div className="text-left">
          <label className="text-sm text-gray-300">Password</label>
          <motion.input
            name="password"
            value={form.password}
            onChange={onChange}
            type="password"
            placeholder="Enter your password"
            className={`w-full mt-1 p-3 rounded-lg bg-white/15 text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none transition-all ${
              errors.password ? "ring-2 ring-red-400" : ""
            }`}
            whileFocus={{ scale: 1.02 }}
          />
          {errors.password && <p className="text-xs text-red-300 mt-1">{errors.password}</p>}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={loading}
          className="w-full mt-2 bg-yellow-400 text-black font-semibold py-3 rounded-lg shadow hover:bg-yellow-500 transition-all"
        >
          {loading ? "Please wait..." : mode === "signup" ? "Sign Up" : "Log In"}
        </motion.button>
      </form>

      {msg && <div className="mt-4 text-sm text-gray-100">{msg}</div>}

      <p className="mt-4 text-sm text-gray-300">
        {mode === "signup" ? "Already have an account?" : "Don’t have an account?"}{" "}
        <button
          onClick={() => setMode(mode === "signup" ? "login" : "signup")}
          className="text-yellow-400 font-medium hover:underline"
        >
          {mode === "signup" ? "Log In" : "Sign Up"}
        </button>
      </p>

      <motion.div
        className="mt-2 flex flex-col items-center border-t border-white/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex justify-center gap-4 p-3 text-2xl">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-all">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:text-[#1A75E8] transition-all">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:text-[#F56040] transition-all">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[#1DA1F2] hover:text-[#0d8af0] transition-all">
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 overflow-hidden bg-black"
     style={{backgroundImage:`url(${Wave})`,backgroundSize:'cover', brightness:'0.5'}}>
      {/* Wave SVG Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="12%" stopColor="#000428" />
              <stop offset="50%" stopColor="#004e92" />
              <stop offset="100%" stopColor="#000046" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,160L60,165.3C120,171,240,181,360,160C480,139,600,85,720,90.7C840,96,960,160,1080,186.7C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Left side content */}
      <motion.div
        className="flex-1 max-w-2xl px-4 py-16 md:py-24 flex flex-col justify-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-yellow-400 text-lg font-medium tracking-wide mb-2">Web Developer UI/UX</h2>
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-semibold mb-4 leading-tight text-white" style={{ fontFamily: "Poppins, sans-serif", textShadow: "0 0 12px #ffcc00" }}>
          Hello, I’m Tejas Deshmukh
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          I am{" "}
          <TypeAnimation
            sequence={["a Developer...", 2000, "a Designer...", 2000, "a Coder...", 2000, "a Creator...", 2000]}
            wrapper="span"
            speed={50}
            className="text-yellow-400 font-bold"
            repeat={Infinity}
          />
        </h3>
        <p className="text-white text-lg md:text-xl mb-6 font-medium">
          Crafting Responsive Websites with React, Tailwind CSS & Clean UI/UX Design
        </p>
        <div className="flex gap-4">
          <a href="#work" className="bg-white text-black font-bold py-2.5 px-5 rounded-full shadow-md hover:bg-slate-300 transition">Explore My Work</a>
          <a href="#contact" className="border-2 border-yellow-400 text-yellow-400 py-2.5 px-5 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition">Contact</a>
        </div>
      </motion.div>

      {/* Right side: Auth Card */}
      <motion.div
        className="flex-shrink-0 w-full max-w-[360px] mt-8 md:mt-0 flex justify-center items-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AuthCard />
      </motion.div>
    </section>
  );
}
