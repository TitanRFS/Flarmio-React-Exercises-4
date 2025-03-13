import { Tip } from "../TipComponent/Tip";
import { Cog, ShipIcon, KeyIcon, AnchorIcon } from "lucide-react";

interface ServiceRequestProps {
  arrival: string;
  className?: string;
  departure: string;
  equipments: string;
  shipName: string;
  onClick?: () => void;
  port: string;
  status: string;
  uniqueId: string;
  showMailTip?: boolean;
  showBriefcaseTip?: boolean;
  showTextTip?: boolean;
  tipText?: string;
}

export const ServiceRequest = ({
  arrival,
  departure,
  equipments,
  shipName,
  onClick,
  port,
  status,
  uniqueId,
  className,
  showMailTip = false,
  showBriefcaseTip = false,
  showTextTip = false,
  tipText = "",
}: ServiceRequestProps) => {
  const statusColors: Record<string, string> = {
    "Offers Received": "bg-blue-500",
    "No Offers": "bg-gray-400",
    Completed: "bg-green-500",
  };

  return (
    <div
      className={`flex flex-row w-full justify-between rounded-xl bg-slate-100 p-4 shadow-md ${className} mb-2`}
      onClick={onClick}
    >
      <div
        className={`mr-4 w-[4px] ${statusColors[status] || "bg-gray-400"}`}
      ></div>
      <div className="flex-1">
        <div className="flex space-x-2">
          <Cog className="h-5 w-5" />
          <div>{equipments}</div>
        </div>
        <div className="flex space-x-2">
          <ShipIcon className="h-5 w-5" />
          <div>{shipName}</div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex space-x-2">
          <KeyIcon className="h-5 w-5" />
          <div>{uniqueId}</div>
        </div>
        <div className="flex space-x-2">
          <AnchorIcon className="h-5 w-5" />
          <div>{arrival}</div>
          <div>{departure}</div>
          <div>{port}</div>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        <div
          className={`${statusColors[status]} px-2 py-1 rounded-full text-xs`}
        >
          {status || "No Status"}
        </div>
        <Tip
          showMail={showMailTip}
          showBriefcase={showBriefcaseTip}
          text={showTextTip ? tipText : undefined}
          onClick={() => console.log("Tip clicked!")}
        />
      </div>
    </div>
  );
};
