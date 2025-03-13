interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
  isDisabled = false,
}) => {
  const baseClasses =
    "flex items-center max-w-md p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow cursor-pointer";
  const disabledClasses = isDisabled ? "opacity-50 cursor-not-allowed" : "";
  const combinedClasses = `${baseClasses} ${disabledClasses} ${className}`;

  return (
    <div
      className={combinedClasses}
      onClick={!isDisabled ? onClick : undefined}
    >
      {children}
    </div>
  );
};
