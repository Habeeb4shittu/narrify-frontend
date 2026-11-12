"use client";

import { Sparkles } from "lucide-react";

interface AuthSideBannerProps {
  headline: string;
  subline: string;
  badge?: string;
}

export function AuthSideBanner({
  headline,
  subline,
  badge = "Next-Gen AI TTS Architecture",
}: AuthSideBannerProps) {
  return (
    <div className="hidden md:block h-dvh w-1/2 relative overflow-hidden bg-gray-900 flex-shrink-0">
      <video
        src="/signup-vid.mp4"
        className="absolute inset-0 h-full w-full object-cover scale-105 brightness-75"
        loop
        autoPlay
        muted
        playsInline
      />

      {/* Layered gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-950/60 via-gray-950/40 to-gray-950/80" />
      <div className="absolute inset-0 bg-linear-to-t from-gray-950/95 via-transparent to-transparent" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-600/15 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-600/15 blur-3xl animate-pulse [animation-delay:1s]" />

      {/* Branding */}
      <div className="absolute top-8 left-8 flex items-center gap-2.5">
        <span className="text-white font-bold text-lg tracking-tight">Narrify</span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-10 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
          {badge}
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white leading-tight max-w-sm">
          {headline}
        </h2>
        <p className="text-sm text-gray-400 max-w-sm leading-relaxed">{subline}</p>

        {/* Trust indicators */}
        <div className="flex items-center gap-6 pt-2">
          {["99.9% Uptime", "Studio Quality", "60+ Languages"].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-xs text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

