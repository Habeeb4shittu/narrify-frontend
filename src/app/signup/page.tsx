"use client";

import Link from "next/link";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import { AuthSideBanner } from "@/components/auth/AuthSideBanner";
import { InputField } from "@/components/auth/InputField";

export default function SignupPage() {
  return (
    <section className="flex h-screen overflow-hidden bg-gray-950 text-gray-100">
      {/* Left: Video Banner */}
      <AuthSideBanner
        headline="Welcome to the Future of Audio"
        subline="Generate studio-quality speech and audiobooks in seconds with our multi-engine AI TTS platform."
      />

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 overflow-y-auto">
        <div className="w-full max-w-sm space-y-8">

          {/* Mobile logo */}
          <div className="md:hidden flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">N</span>
            </div>
            <span className="font-bold text-white text-lg">Narrify</span>
          </div>

          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-white">Create your account</h1>
            <p className="text-sm text-gray-500">Start building AI audio projects today. Free forever.</p>
          </div>

          {/* OAuth buttons */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { name: "Google", icon: "G" },
              { name: "GitHub", icon: "⌥" },
              { name: "Facebook", icon: "f" },
            ].map(({ name, icon }) => (
              <button
                key={name}
                type="button"
                disabled
                title={`${name} coming soon`}
                className="flex flex-col items-center justify-center gap-1 py-2.5 border border-gray-800 rounded-xl bg-gray-900/50 text-gray-600 cursor-not-allowed opacity-40 text-xs font-medium transition-all"
              >
                <span className="text-base font-bold">{icon}</span>
                <span>{name}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gray-950 text-[11px] text-gray-600 uppercase tracking-widest font-semibold">
                or with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <InputField
              id="name"
              label="Full Name"
              type="text"
              placeholder="Alex Mercer"
              icon={User}
              required
            />
            <InputField
              id="email"
              label="Email Address"
              type="email"
              placeholder="alex@company.com"
              icon={Mail}
              required
            />
            <InputField
              id="password"
              label="Password"
              type="password"
              placeholder="Min. 8 characters"
              icon={Lock}
              required
            />

            {/* Terms */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="terms"
                type="checkbox"
                required
                className="mt-0.5 w-4 h-4 rounded border-gray-700 bg-gray-900 text-indigo-500 focus:ring-indigo-500 focus:ring-offset-gray-950 cursor-pointer accent-indigo-500"
              />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                I agree to the{" "}
                <Link href="#" className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-2 transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-2 transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group relative w-full py-3 px-4 mt-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-600 pb-4">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
