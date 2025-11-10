"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // ✅ Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim().length > 0 && password.trim().length > 0;

  // Track mouse position globally
  useEffect(() => {
    if (typeof window === "undefined") return; // ✅ Prevent SSR issues
  
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
  
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  

  // Convert to small movement offsets
  let offsetX = 0;
  let offsetY = 0;
  
  if (typeof window !== "undefined") {
    offsetX = (mousePos.x / window.innerWidth - 0.5) * 20;
    offsetY = (mousePos.y / window.innerHeight - 0.5) * 20;
  }
  

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-cyan-50 via-white to-teal-100 overflow-hidden">

      {/* Left: Animated Boy Illustration */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="md:w-1/2 flex justify-center items-center"
      >
        <motion.div
          animate={{
            x: offsetX,
            y: offsetY,
            rotate: offsetX / 2,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          <Image
            src="/login-boy.png"
            alt="Animated Boy Illustration"
            width={400}
            height={400}
            className="drop-shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Right: Login Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 0.2 }}
        className="md:w-1/2 w-full px-6 md:px-12 py-10"
      >
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center text-teal-700 mb-6">
            Welcome Back 👋
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Login to continue your shopping journey
          </p>

          <form className="space-y-5">
            {/* ✅ Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition"
                required
              />
            </div>

            {/* ✅ Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition"
                required
              />
            </div>

            {/* ✅ Login Button (disabled until valid) */}
            <motion.button
              whileHover={isFormValid ? { scale: 1.05 } : {}}
              whileTap={isFormValid ? { scale: 0.95 } : {}}
              type="submit"
              disabled={!isFormValid}
              className={`w-full font-semibold py-2 rounded-lg shadow-md transition-all
                ${
                  isFormValid
                    ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white cursor-pointer"
                    : "bg-gray-300 text-white cursor-not-allowed"
                }
              `}
            >
              Login
            </motion.button>
          </form>

          {/* Bottom Links */}
          <div className="mt-6 text-center text-gray-600">
            <p>
              Don’t have an account?{" "}
              <Link
                href="/users/sign-up"
                className="text-cyan-600 font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating Decorative Circles */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-16 h-16 bg-cyan-300 rounded-full opacity-40 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-20 h-20 bg-teal-400 rounded-full opacity-30 blur-2xl"
      />
    </div>
  );
}
