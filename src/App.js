import "./App.css";

import Dashboard from "./Dashboard.js";
import DashboardRCM from "./DashboardRCM";

export default function App() {
      const stocks = [
        { id: 1, name: "Apple", price: 175 },
        { id: 2, name: "Google", price: 2800 },
        { id: 3, name: "Amazon", price: 3450 },
        { id: 4, name: "Microsoft", price: 310 },
        { id: 5, name: "Tesla", price: 850 },
    ];
  return (
    <div>
      <Dashboard stocks={stocks}></Dashboard>
      <hr></hr>
      <DashboardRCM stocks={stocks}></DashboardRCM>
    </div>
  );
}
