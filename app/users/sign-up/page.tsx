"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SignupPage() {
  // Cursor-follow values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouseMove(e) {
    const { innerWidth, innerHeight } = window;
    const offsetX = e.clientX - innerWidth / 2;
    const offsetY = e.clientY - innerHeight / 2;

    x.set(offsetX);
    y.set(offsetY);
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ✅ Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid =
    fullName.trim().length > 0 &&
    email.trim().length > 0 &&
    password.trim().length > 0;

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-100 overflow-hidden">
      
      {/* Left Illustration Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center items-center p-10"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
          }}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/login-boy.png"
            alt="Signup Illustration"
            width={380}
            height={380}
            className="drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Right Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex-1 flex justify-center items-center px-8"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-white/50"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Create Account
          </h2>

          <form className="flex flex-col gap-5">
            
            {/* Full Name */}
            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3 rounded-xl bg-white text-black border border-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />

            {/* Email */}
            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-xl bg-white text-black border border-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />

            {/* Password */}
            <motion.input
              whileFocus={{ scale: 1.03 }}
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded-xl bg-white text-black border border-gray-400 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />

            {/* Submit Button */}
            <motion.button
              whileHover={isFormValid ? { scale: 1.05 } : {}}
              whileTap={isFormValid ? { scale: 0.95 } : {}}
              type="submit"
              disabled={!isFormValid}
              className={`mt-3 py-3 rounded-xl font-semibold shadow-lg text-white
                ${
                  isFormValid
                    ? "bg-teal-500 hover:bg-teal-600 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              Sign Up
            </motion.button>
          </form>

          <p className="text-center text-gray-700 mt-4">
            Already have an account?{" "}
            <Link
              href="/users/login"
              className="text-teal-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
