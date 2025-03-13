import React, { useEffect, useState } from "react";
import { ShipCard } from "./ShipCard";

interface ShipData {
  name: string;
  type: string;
  image: string;
}

interface ShipProps {
  onDataLoaded?: () => void;
}

export const Ship: React.FC<ShipProps> = ({ onDataLoaded }) => {
  const [ships, setShips] = useState<ShipData[]>([]);

  const fetchData = async () => {
    const spreadsheetId = "1DyWyVS1yWkbJc9vCD6teR5VG3eeiIR0MjbWGkHDRnW0";
    try {
      const response = await fetch(
        `https://api.graphqlsheet.com/api/${spreadsheetId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: "9689bc2a3dcdd514190afd54c8b1de33fdd62950",
          },
          body: JSON.stringify({
            query: `
            {
              get (limit: 2) {
                name
                type
                image
              }
            }
          `,
          }),
        }
      );

      const { data } = await response.json();
      if (data && data.get) {
        setShips(data.get);
        if (onDataLoaded) {
          onDataLoaded();
        }
      }
    } catch (error) {
      console.error("Error fetching ship data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-4">
      {ships.map((ship, index) => (
        <ShipCard
          key={index}
          image={ship.image}
          name={ship.name}
          type={ship.type}
          onClick={() => console.log(`Clicked on ${ship.name}`)}
        />
      ))}
    </div>
  );
};
