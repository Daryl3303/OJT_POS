import React, { useState } from "react";
import {
  FiBarChart2,
  FiShoppingBag,
  FiGrid,
  FiHelpCircle,
  FiSettings,
  FiPower,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import POSDashboard from "./reports";
import POSMain from "./mainPage";
import Order from "./order";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [oderPageOpen, setOderPageOpen] = useState(false);

  const [pageState, setPageState] = useState("dashboard");

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <div className="flex bg-gray-900 text-white h-[100vh] w-full">
      <div
        className={`h-full bg-gray-800 text-white p-4 transition-all duration-300 ${
          sidebarOpen ? "w-60" : "w-16"
        }`}
      >
        <button
          className="text-white mb-4 hover:scale-110 transition-transform duration-300"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl flex justify-start" />
          )}
        </button>
        <div className="flex flex-col gap-4">
          <button onClick={()=>{
            setPageState("dashboard")
            setSidebarOpen(false)
          }} className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <FiBarChart2 />
            {sidebarOpen && <span>Reports</span>}
          </button>
          <button onClick={()=>{
            setPageState("items")
            setSidebarOpen(false)
          }} className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <FiShoppingBag />
            {sidebarOpen && <span>Items</span>}
          </button>
          <button className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <FiGrid />
            {sidebarOpen && <span>Inventory</span>}
          </button>
          <button className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <IoNotificationsOutline />
            {sidebarOpen && <span>Notifications</span>}
          </button>
          <button className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <FiHelpCircle />
            {sidebarOpen && <span>Help Center</span>}
          </button>
          <button className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <FiSettings />
            {sidebarOpen && <span>Settings</span>}
          </button>
          <button className="flex items-center gap-3 mt-auto hover:bg-red-400 p-2 rounded cursor-pointer">
            <FiPower />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {pageState === "dashboard" && <POSMain/>}
      {pageState === "items" && <Order/>}
    </div>
  );
}

export default Dashboard;
