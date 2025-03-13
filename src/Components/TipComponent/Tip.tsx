import React from "react";
import { MailIcon, BriefcaseIcon } from "lucide-react";

interface TipProps {
  className?: string;
  theme?: "light" | "dark";
  showMail?: boolean;
  showBriefcase?: boolean;
  showText?: boolean;
  iconColor?: string;
  hasMessage?: boolean;
  onClick?: () => void;
  shadow?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  text?: string;
  tooltip?: string;
}

export const Tip: React.FC<TipProps> = ({
  className = "",
  theme = "light",
  showMail = true,
  showBriefcase = true,
  showText = true,
  iconColor,
  hasMessage = false,
  onClick,
  shadow = false,
  size = "sm",
  text,
  tooltip,
}) => {
  const sizeClasses = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const containerSizeClasses = {
    xs: "p-0.5",
    sm: "p-1",
    md: "p-1.5",
    lg: "p-2",
  };

  const themeClasses = {
    light: "bg-gray-100 text-gray-500",
    dark: "bg-gray-700 text-white",
  };

  const shadowClass = shadow ? "shadow-md" : "";

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 ${className}`}
      title={tooltip}
    >
      {showMail && (
        <div
          className={`relative ${themeClasses[theme]} ${containerSizeClasses[size]} rounded-md ${shadowClass}`}
        >
          <MailIcon className={`${sizeClasses[size]} ${iconColor || ""}`} />
          {hasMessage && (
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
          )}
        </div>
      )}

      {showBriefcase && (
        <div
          className={`${themeClasses[theme]} ${containerSizeClasses[size]} rounded-md ${shadowClass}`}
        >
          <BriefcaseIcon
            className={`${sizeClasses[size]} ${iconColor || ""}`}
          />
        </div>
      )}

      {showText && text && (
        <div
          className={`${themeClasses[theme]} rounded-sm flex items-center justify-center text-xs ${shadowClass}`}
          style={{
            width:
              size === "xs"
                ? "16px"
                : size === "sm"
                ? "20px"
                : size === "md"
                ? "24px"
                : "28px",
            height:
              size === "xs"
                ? "16px"
                : size === "sm"
                ? "20px"
                : size === "md"
                ? "24px"
                : "28px",
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};
