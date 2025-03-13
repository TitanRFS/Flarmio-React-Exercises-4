import { useEffect, useState } from "react";
import { Tip } from "../TipComponent/Tip";
import { Cog, ShipIcon, KeyIcon, AnchorIcon } from "lucide-react";

interface ServiceRequest {
  arrival: string;
  className?: string;
  departure: string;
  equipments: string;
  hasNewMessage: boolean;
  hasNotification: boolean;
  shipName: string;
  image?: string;
  onClick?: () => void;
  port: string;
  status: string;
  totalOffers: number;
  travellingSuppliersAllowed: boolean;
  uniqueId: string;
}

const fetchData = async () => {
  const spreadsheetId = "1DyWyVS1yWkbJc9vCD6teR5VG3eeiIR0MjbWGkHDRnW0";
  const response = await fetch(
    `https://api.graphqlsheet.com/api/${spreadsheetId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "9689bc2a3dcdd514190afd54c8b1de33fdd62950",
      },
      body: JSON.stringify({
        query: `{
          get (limit: 20) {
            arrival
            departure
            equipments
            hasNewMessage
            hasNotification
            shipName
            image
            port
            status
            totalOffers
            travellingSuppliersAllowed
            uniqueId
          }
        }`,
      }),
    }
  );
  const data = await response.json();
  return data.data.get;
};

export const ServiceRequest = () => {
  const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setServiceRequests(data);
    };
    loadData();
  }, []);

  const statusColors: Record<string, string> = {
    "Offers Received": "bg-blue-500",
    "No Offers": "bg-gray-400",
    Completed: "bg-green-500",
  };

  return (
    <div className="flex flex-col items-start space-y-4 w-[800px]">
      {serviceRequests.map((request) => (
        <div
          key={request.uniqueId}
          className="flex flex-row w-full justify-between rounded-xl bg-slate-100 p-4 shadow-md"
        >
          <div className="mr-4 w-[4px] bg-green-400"></div>
          <div className="flex-1">
            <div className="flex space-x-2">
              <Cog className="h-5 w-5" />
              <div>{request.equipments}</div>
            </div>
            <div className="flex space-x-2">
              <ShipIcon className="h-5 w-5" />
              <div>{request.shipName}</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex space-x-2">
              <KeyIcon className="h-5 w-5" />
              <div>{request.uniqueId}</div>
            </div>
            <div className="flex space-x-2">
              <AnchorIcon className="h-5 w-5" />
              <div>{request.arrival}</div>
              <div>{request.departure}</div>
              <div>{request.port}</div>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div
              className={`${
                statusColors[request.status]
              } px-2 py-1 rounded-full text-xs`}
            >
              {request.status || "No Status"}
            </div>
            <Tip
              hasMessage
              text="2"
              onClick={() => console.log("Tip clicked!")}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
