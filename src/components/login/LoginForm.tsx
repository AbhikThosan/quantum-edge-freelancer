"use client";

import React, { useState } from "react";
import { CiLock, CiMail } from "react-icons/ci";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import SocialLinksGroup from "../common/SocialLinksGroup";
import Link from "next/link";
import { useLogin } from "@/hooks/useLogin";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { login, loading, error } = useLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="flex items-center justify-center p-[10px] xl:p-[60px]">
      <div className="w-full max-w-md">
        <div className="text-center mb-[37px]">
          <h3 className="text-[32px] font-bold mb-[11px]">
            Login your account
          </h3>
          <p className="text-sm font-semibold">
            Don&apos;t have an account?{" "}
            <Link
              href="/registration"
              className="text-primary hover:text-green-300 transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>

        <div className="space-y-[30px]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <CiMail className="h-6 w-6 text-[#888888]" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3  border-1 border-[#4B4B4B] rounded-full placeholder-[#4B4B4B] placeholder:text-sm focus:outline-none focus:border-primary transition-all duration-200"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <CiLock className="h-6 w-6 text-[#888888]" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border-1 border-[#4B4B4B] rounded-full placeholder-[#4B4B4B] placeholder:text-sm focus:outline-none focus:border-primary transition-all duration-200"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
            >
              {showPassword ? (
                <IoEyeOutline className="h-6 w-6" />
              ) : (
                <IoEyeOffOutline className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-[21px] h-[21px] rounded"
              />
              <span className="text-sm font-semibold text-[#CCC]">
                Remember Me
              </span>
            </label>
            <button
              type="button"
              className="text-sm font-semibold text-[#CCC] hover:text-primary transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
            className="w-full py-[14px] bg-primary hover:bg-green-500 text-sm font-semibold rounded-full transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login Now"}
          </button>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </div>

        <div className="mt-[41px] mb-[26px] text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-secondary text-sm font-semibold">
                Or
              </span>
            </div>
          </div>
        </div>

        <SocialLinksGroup />
      </div>
    </div>
  );
}
