import { useState } from "react";
import "./App.css";
import { Ship } from "./Components/ShipComponent/Ship";
import { PendingRating } from "./Components/PendingRating/PendingRating";
import { Tip } from "./Components/TipComponent/Tip";
import { ServiceRequest } from "./Components/ServiceRequestComponent/ServiceRequest";
function App() {
  const [shipsLoaded, setShipsLoaded] = useState(false);

  const handleShipsLoaded = () => {
    setShipsLoaded(true);
  };

  return (
    <>
      <Ship onDataLoaded={handleShipsLoaded} />
      {shipsLoaded && (
        <PendingRating
          image="https://i.guim.co.uk/img/media/5d3da3fc2c5de789cd7bff885ddfbcf15d729209/0_244_4080_2448/master/4080.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a52980687269bf32f19304f9fe303510"
          supplierName="SP trading company LTD"
          shipName="SeaLion"
          onClick={() => console.log("Clicked!")}
          className="my-2"
        />
      )}
      <Tip hasMessage text="2" onClick={() => console.log("Tip clicked!")} />
      <ServiceRequest />
    </>
  );
}

export default App;
