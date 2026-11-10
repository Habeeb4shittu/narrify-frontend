"import client"; // if using Next.js client features or hooks

import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function SignupPage() {
    return (
        <section className="grid md:flex items-center justify-center min-h-screen md:h-screen overflow-hidden bg-gray-950 text-gray-100 antialiased selection:bg-indigo-500 selection:text-white">
            
            {/* Left side: Immersive Video Banner (Hidden on mobile) */}
            <div className="hidden md:block h-dvh w-1/2 relative overflow-hidden bg-gray-900">
                <video
                    src="/signup-vid.mp4"
                    className="h-dvh w-full object-cover scale-105 filter brightness-90 animate-fade-in"
                    loop
                    autoPlay
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950/90 via-gray-950/30 to-transparent flex items-end p-12">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                            Next-Gen AI TTS Architecture
                        </div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-white">
                            Welcome to the Future of Audio
                        </h2>
                        <p className="text-gray-300 text-sm max-w-md leading-relaxed">
                            Generate high-performance, studio-quality speech and audiobooks in seconds with our state-of-the-art multi-engine TTS platform.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side: Modernized Registration Form Container */}
            <div className="w-full md:w-1/2 flex items-center justify-center overflow-y-auto h-full px-6 py-12">
                <div className="w-full max-w-md relative">
                    
                    {/* Subtle background glow effect under the card */}
                    <div className="absolute -inset-1 bg-linear-to-r from-indigo-500/20 via-purple-500/10 to-transparent rounded-3xl blur-xl opacity-70 pointer-events-none"></div>

                    <form className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-800/80 shadow-2xl shadow-black/80 w-full p-8 rounded-2xl space-y-5">

                        {/* Header */}
                        <div className="text-center md:text-left space-y-1">
                            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 justify-center md:justify-start">
                                Create an account
                            </h1>
                            <p className="text-xs text-gray-400">Start building your AI audio projects today</p>
                        </div>

                        {/* OAuth Providers (Disabled for now with refined badges) */}
                        <div className="grid grid-cols-3 gap-2.5">
                            {["Google", "GitHub", "Facebook"].map((provider) => (
                                <button
                                    key={provider}
                                    type="button"
                                    disabled
                                    className="group relative flex items-center justify-center py-2.5 px-3 border border-gray-800/80 rounded-xl bg-gray-800/30 text-gray-500 hover:border-gray-700 opacity-50 cursor-not-allowed text-xs font-medium transition-all duration-200"
                                    title={`${provider} sign-up coming soon`}
                                >
                                    <span>{provider}</span>
                                </button>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="relative flex items-center justify-center py-1">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-800/80"></div>
                            </div>
                            <div className="relative px-3 bg-gray-900 text-[11px] uppercase tracking-wider text-gray-500 font-semibold">
                                Or continue with email
                            </div>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-4">
                            
                            {/* Full Name */}
                            <div>
                                <label className="block text-xs font-medium text-gray-300 mb-1.5 uppercase tracking-wider">
                                    Full Name
                                </label>
                                <div className="relative group">
                                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-400 transition-colors">
                                        <User className="w-4 h-4" />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Alex Mercer"
                                        className="w-full pl-10 pr-4 py-2.5 bg-gray-950/80 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/80 focus:border-indigo-500 transition-all shadow-inner"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-xs font-medium text-gray-300 mb-1.5 uppercase tracking-wider">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-400 transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </span>
                                    <input
                                        type="email"
                                        placeholder="alex@company.com"
                                        className="w-full pl-10 pr-4 py-2.5 bg-gray-950/80 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/80 focus:border-indigo-500 transition-all shadow-inner"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-xs font-medium text-gray-300 mb-1.5 uppercase tracking-wider">
                                    Password
                                </label>
                                <div className="relative group">
                                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-400 transition-colors">
                                        <Lock className="w-4 h-4" />
                                    </span>
                                    <input
                                        type="password"
                                        placeholder="••••••••••••"
                                        className="w-full pl-10 pr-4 py-2.5 bg-gray-950/80 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/80 focus:border-indigo-500 transition-all shadow-inner"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Terms Checkbox */}
                            <div className="flex items-start text-xs text-gray-400 pt-1">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-4 h-4 mt-0.5 rounded border-gray-800 bg-gray-950 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                                    required
                                />
                                <label htmlFor="terms" className="ml-2.5 cursor-pointer leading-relaxed">
                                    I agree to the <Link href="#" className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-2">Terms of Service</Link> and <Link href="#" className="text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-2">Privacy Policy</Link>
                                </label>
                            </div>
                        </div>

                        {/* Submit Button with Hover Lift and Arrow Indicator */}
                        <button
                            type="submit"
                            className="group relative w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>Create Account</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                        {/* Footer Link */}
                        <p className="text-center text-xs text-gray-400 pt-1">
                            Already have an account? <Link href="#" className="text-indigo-400 font-medium hover:text-indigo-300 transition-colors">Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}