import Image from "next/image";
import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Image
        src="/favicon.svg"
        alt="Primo Logo"
        width={800}
        height={800}
        className="w-full h-full"
      />
    </div>
  );
};

export default Logo; 