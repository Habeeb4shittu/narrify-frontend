"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  icon: React.ElementType;
  id: string;
  required?: boolean;
  hint?: React.ReactNode;
}

export function InputField({
  label,
  type,
  placeholder,
  icon: Icon,
  id,
  required,
  hint,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const resolvedType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-[11px] font-semibold text-gray-400 uppercase tracking-widest"
        >
          {label}
        </label>
        {hint && <div className="text-[11px]">{hint}</div>}
      </div>
      <div className="relative group">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-600 group-focus-within:text-indigo-400 transition-colors duration-200">
          <Icon className="w-4 h-4" />
        </span>
        <input
          id={id}
          type={resolvedType}
          placeholder={placeholder}
          required={required}
          className="w-full pl-10 pr-10 py-3 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 hover:border-gray-700"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-600 hover:text-gray-400 transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
}

