import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";

function Order() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 min-h-screen text-white">
      <div className="flex-1 p-6 transition-all duration-300 lg:ml-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-4 rounded mb-6">
          <h4>Categories and Items</h4>
          <h4 className="text-center">POS System</h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Panel */}
          <div className="lg:col-span-2">
            {/* Search Bar - Categories */}
            <div className="flex items-center gap-2 p-2 border border-white rounded-md bg-transparent">
              <IoSearch className="text-white h-6 w-6" />
              <input
                type="text"
                placeholder="Search Category..."
                className="w-full bg-transparent outline-none text-white"
              />
            </div>

            {/* Categories Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-[#f0c8cf] p-6 rounded-md shadow-md text-center h-40">
                <h5 className="text-lg font-semibold">Categories</h5>
              </div>
            </div>

            {/* Search Bar - Items */}
            <div className="flex items-center gap-2 p-2 border border-white rounded-md bg-transparent mt-3">
              <IoSearch className="text-white h-6 w-6" />
              <input
                type="text"
                placeholder="Search Items..."
                className="w-full bg-transparent outline-none text-white"
              />
            </div>

            {/* Products Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-md shadow-md">
                <div className="w-full h-40 bg-green-200 flex justify-center items-center">
                  <img src="https://via.placeholder.com/150" alt="Product" />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button
                    className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                  <span className="text-lg text-black">{quantity}</span>
                  <button
                    className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600"
                    onClick={() => setQuantity(Math.max(0, quantity - 1))}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel (Cart) */}
          <div className="bg-gray-800 p-6 rounded-md shadow-md">
            {/* Cart Table */}
            <table className="w-full text-center mb-[70%]">
              <thead>
                <tr className="border-b border-gray-600">
                  <th>Items</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td>Item 1</td>
                  <td>{quantity}</td>
                  <td>$10.00</td>
                </tr>
              </tbody>
            </table>

            {/* Cart Summary */}
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${(quantity * 10).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>$0.00</span>
            </div>
            <div className="border-t border-gray-600 my-2"></div>
            <div className="flex justify-between text-lg font-semibold">
              <h5>Total</h5>
              <h5>${(quantity * 10).toFixed(2)}</h5>
            </div>

            {/* Cart Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4">
              <a
                href="place_order/?view=order"
                className="bg-[#fefefe]  flex items-center justify-center rounded-[20px] hover:bg-[#fefefec1] text-black h-[35px] w-[115px] "
              >
                Place Order
              </a>
              <button className="bg-transparent px-4  rounded-[20px] hover:bg-[#f4ffc3] text-[#f4ffc3]  hover:text-black border-[1px] border-[#f4ffc3] h-[35px] w-[115px]">
                Save
              </button>
              <button className=" px-4 py-2 rounded-md hover:scale-110 transition-transform duration-300 bg-transparent border-[1px] border-white">
                <LuClipboardList className="text-white h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
