import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Legend } from "chart.js";

Chart.register(ArcElement, Legend);

const POSMain = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const salesData = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        data: [30, 10, 20, 5, 35],
        backgroundColor: [
          "#d3b7eb",
          "#ffcbd3",
          "#e5edb7",
          "#a8d8ea",
          "#b8b8b8",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div class="flex flex-col lg:flex-row bg-gray-900 text-white min-h-screen w-full">
      <div class="flex-1 p-6     lg:ml-16">
        <div class="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 rounded mb-6">
          <h4>Reports</h4>
          <h4 class="text-center">POS System</h4>
        </div>

        <div class="    flex flex-col sm:flex-row justify-between items-center mb-6">
          <div>
            <h3>Welcome User</h3>
            <h5>Sales Report</h5>
          </div>
          <div class="relative mt-4 sm:mt-0">
            <input
              type="date"
              class="bg-gray-700 text-white py-3 px-4 rounded-lg flex items-center gap-2 cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md text-lg"
            />
          </div>
        </div>

        <div class="w-full flex flex-col lg:flex-row gap-7">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-[40%]">
            <div class="bg-[#f0c8cf] p-6 rounded-[10px] shadow text-center">
              <h3 class="text-black font-bold text-xl lg:text-3xl">
                Php 10,000
              </h3>
              <p class="text-black">Total Sales</p>
            </div>

            <div class="bg-gray-700 p-6 rounded-[10px] shadow text-center">
              <h1 class="text-3xl lg:text-5xl font-bold">26</h1>
              <p>Number of Items Sold</p>
            </div>

            <div class="bg-gray-700 shadow-md rounded-[10px]">
              <div class="p-4">
                <h5 class="text-center mb-3 text-lg font-semibold">
                  Categories
                </h5>
                <div class="h-9 w-full bg-[#a8d8ea] mb-2 rounded-[50px]"></div>
                <div class="h-9 w-full bg-[#e5edb7] mb-2 rounded-[50px]"></div>
                <div class="h-9 w-full bg-[#b8b8b8] rounded-[50px]"></div>
              </div>
            </div>

            <div class="bg-gray-700 shadow-md rounded-[10px]">
              <div class="p-4">
                <h5 class="text-center mb-3 text-lg font-semibold">Items</h5>
                <div class="h-9 w-full border border-gray-300 rounded-[50px] mb-2"></div>
                <div class="h-9 w-full border border-gray-300 rounded-[50px] mb-2"></div>
                <div class="h-9 w-full border border-gray-300 rounded-[50px]"></div>
              </div>
            </div>
          </div>

          <div class="bg-gray-800 rounded-lg shadow-lg p-4 mx-auto w-full sm:w-[70%] lg:w-[30%]">
            <div class="card-body">
              <h5 class="text-center mb-3 text-white text-lg font-semibold">
                Recent
              </h5>
              <table class="w-full text-white">
                <thead>
                  <tr class="border-b border-gray-600">
                    <th class="text-left p-2">Date</th>
                    <th class="text-right p-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-700">
                    <td class="p-2">dd/mm/yyyy</td>
                    <td class="p-2 text-right text-green-400">+ 100.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="w-full sm:w-[50%] lg:w-[30%] mx-auto mt-6 flex justify-center">
            <Doughnut
              data={salesData}
              options={{
                cutout: "60%",
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSMain;
