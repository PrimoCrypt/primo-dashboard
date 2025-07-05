import React from "react";
import Image from "next/image";

interface TextLogoProps {
  className?: string;
  variant?: "default" | "compact";
}

const TextLogo: React.FC<TextLogoProps> = ({ className = "", variant = "default" }) => {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="w-10 h-10">
          <Image
            src="/favicon.svg"
            alt="Primo Logo"
            width={40}
            height={40}
            className="w-full h-full"
          />
        </div>
        <span className="text-white font-bold text-xl">Primo</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="w-12 h-12">
        <Image
          src="/favicon.svg"
          alt="Primo Logo"
          width={48}
          height={48}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-white font-bold text-2xl leading-tight">Primo</span>
        <span className="text-emerald-300 text-sm font-medium">Admin Dashboard</span>
      </div>
    </div>
  );
};

export default TextLogo; 