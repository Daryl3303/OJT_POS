import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Legend } from "chart.js";
import { FiBarChart2, FiShoppingBag, FiGrid, FiHelpCircle, FiSettings, FiPower, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

Chart.register(ArcElement, Legend);

const POSDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    
    const salesData = {
        labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        datasets: [{
            data: [30, 10, 20, 5, 35],
            backgroundColor: ['#d3b7eb', '#ffcbd3', '#e5edb7', '#a8d8ea', '#b8b8b8'],
            borderWidth: 0,
        }],
    };

    return (
        <div className="flex bg-gray-900 text-white h-full w-full">
            {/* Sidebar */}
            <div className={`h-full bg-gray-800 text-white p-4 transition-all duration-300 ${sidebarOpen ? 'w-60' : 'w-16'}`}>
                <button className="text-white mb-4" onClick={toggleSidebar}>
                    {sidebarOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl flex justify-start" />}
                </button>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"><FiBarChart2 />{sidebarOpen && <span>Reports</span>}</div>
                    <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"><FiShoppingBag />{sidebarOpen && <span>Items</span>}</div>
                    <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"><FiGrid />{sidebarOpen && <span>Inventory</span>}</div>
                    <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"><FiHelpCircle />{sidebarOpen && <span>Help Center</span>}</div>
                    <div className="flex items-center gap-3 hover:bg-gray-700 p-2 rounded cursor-pointer"><FiSettings />{sidebarOpen && <span>Settings</span>}</div>
                    <div className="flex items-center gap-3 mt-auto hover:bg-red-700 p-2 rounded cursor-pointer"><FiPower />{sidebarOpen && <span>Logout</span>}</div>
                </div>
            </div>
            
            {/* Main Content */}
            <div className={`flex-1 p-6 transition-all duration-300 w-[100%]`}>
                <div className="flex justify-between items-center bg-gray-800 p-4 rounded mb-6">
                    <h4>Reports</h4>
                    <h4 className="text-center">POS System</h4>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3>Welcome User</h3>
                        <h5>Sales Report</h5>
                    </div>
                    <button className="bg-gray-700 text-white py-2 px-4 rounded flex items-center gap-2">
                        March 5, 2025 <FiChevronDown />
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-300 p-6 rounded shadow text-center">
                        <h3 className="text-black">Php 10,000</h3>
                        <p className="text-black">Total Sales</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded shadow text-center">
                        <h1 className="text-5xl font-bold">26</h1>
                        <p>Number of Items Sold</p>
                    </div>
                </div>
                
                <div className="w-80 mx-auto mt-6">
                    <Doughnut data={salesData} options={{ cutout: "60%", plugins: { legend: { display: false } } }} />
                </div>
            </div>
        </div>
    );
};

export default POSDashboard;
