import { Card } from "../CardComponent/Card";
import { ShipIcon, ChevronRight } from "lucide-react";

interface ShipData {
  name: string;
  type: string;
  image: string;
}

export const ShipCard: React.FC<ShipData & { onClick?: () => void }> = ({
  image,
  name,
  type,
  onClick,
}) => {
  return (
    <Card onClick={onClick} className="flex items-center gap-4">
      <div className="flex-shrink-0">
        <img src={image} alt={name} className="w-20 h-20 " />
      </div>

      {/* Ship Information */}
      <div className="flex flex-1 flex-col justify-start">
        <div className="flex items-center gap-2">
          <ShipIcon className="w-5 h-5 text-gray-500" />
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        </div>
        <h3 className="text-sm text-gray-500 pr-32">{type}</h3>
      </div>

      {/* Chevron Icon */}
      <ChevronRight className="w-12 h-12 text-gray-400 ml-auto" />
    </Card>
  );
};
