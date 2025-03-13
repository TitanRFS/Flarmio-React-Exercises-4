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
      <Tip
        showBriefcase
        showMail
        text="2"
        onClick={() => console.log("Mail and Text clicked!")}
      />{" "}
      <div>
        <ServiceRequest
          arrival="25 Mar"
          departure="31 Mar"
          equipments="Underwater Hull and Appendices"
          shipName="Hope"
          port="Piraeus"
          status="Offers Received"
          uniqueId="HO-22-2"
          showMailTip={true}
          showTextTip={true}
          tipText="2"
          onClick={() => console.log("Service 1 clicked!")}
        />

        <ServiceRequest
          arrival="18 Feb"
          departure="25 Feb"
          equipments="Pressure & Temperature Calibrators"
          shipName="Hope"
          port="Los Angeles"
          status="No Offers"
          uniqueId="HO-22-1"
          showBriefcaseTip={true}
          onClick={() => console.log("Service 2 clicked!")}
        />

        <ServiceRequest
          arrival="29 Jan"
          departure="1 Feb"
          equipments="Bow Thruster"
          shipName="SeaLion"
          port="New York & New Jersey"
          status="Completed"
          uniqueId="SE-22-2"
          showMailTip={true}
          showTextTip={true}
          tipText="1"
          onClick={() => console.log("Service 3 clicked!")}
        />
      </div>
    </>
  );
}

export default App;
