import { Card } from "../CardComponent/Card";
import { ShipIcon, ChevronRight, UserIcon } from "lucide-react";

interface PendingRatingProps {
  className?: string;
  image: string;
  supplierName: string;
  shipName: string;
  onClick?: () => void;
}

export const PendingRating: React.FC<PendingRatingProps> = ({
  className = "",
  image,
  supplierName,
  shipName,
  onClick,
}) => {
  return (
    <div className="flex flex-col">
      <h2
        className="text-lg font-semibold text-gray-800 mb-2 px-1 text-left
      pt-5"
      >
        Pending Rating
      </h2>
      <Card
        onClick={onClick}
        className={`flex items-center gap-4 ${className}`}
      >
        <img
          src={image}
          alt={supplierName}
          className="w-20 h-20 object-cover"
        />
        <div className="flex flex-col justify-center flex-1">
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-gray-500" />
            <h3 className="text-sm font-medium text-gray-800">
              {supplierName}
            </h3>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <ShipIcon className="w-5 h-5 text-gray-500" />
            <p className="text-sm text-gray-500">{shipName}</p>
          </div>
        </div>
        <ChevronRight className="w-12 h-12 text-gray-400 ml-auto" />
      </Card>
    </div>
  );
};
