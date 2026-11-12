"use client";

import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { AuthSideBanner } from "@/components/auth/AuthSideBanner";
import { InputField } from "@/components/auth/InputField";

export default function LoginPage() {
  return (
    <section className="flex h-screen overflow-hidden bg-gray-950 text-gray-100">
      {/* Left: Video Banner */}
      <AuthSideBanner
        headline="Your AI audio studio awaits"
        subline="Pick up right where you left off. Your projects, voices, and history are all here."
        badge="Trusted by 10,000+ creators"
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
            <h1 className="text-2xl font-bold tracking-tight text-white">Welcome back</h1>
            <p className="text-sm text-gray-500">Sign in to continue to your workspace.</p>
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
              placeholder="••••••••••••"
              icon={Lock}
              required
              hint={
                <Link
                  href="/forgot-password"
                  className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              }
            />

            {/* Remember me */}
            <div className="flex items-center gap-2.5 pt-1">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-700 bg-gray-900 cursor-pointer accent-indigo-500"
              />
              <label htmlFor="remember" className="text-xs text-gray-500 cursor-pointer">
                Keep me signed in for 30 days
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group relative w-full py-3 px-4 mt-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-950 flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
            >
              {/* Shimmer */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-600 pb-4">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">
              Create one free
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

