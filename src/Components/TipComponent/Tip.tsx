import React from "react";
import { MailIcon, BriefcaseIcon } from "lucide-react";

interface TipProps {
  showMail?: boolean;
  showBriefcase?: boolean;
  text?: string;
  onClick?: () => void;
}

export const Tip: React.FC<TipProps> = ({
  showMail = false,
  showBriefcase = false,
  text,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="flex items-center gap-2 cursor-pointer">
      {showMail && <MailIcon className="w-4 h-4 text-gray-500" />}
      {showBriefcase && <BriefcaseIcon className="w-4 h-4 text-gray-500" />}
      {text && (
        <span className="text-xs bg-gray-200 px-2 py-1 rounded-md">{text}</span>
      )}
    </div>
  );
};
