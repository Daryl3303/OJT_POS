import { useState } from "react";

function Order() {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            <div className="container mx-auto p-6">
                <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-md">
                    <h4>Categories and Items</h4>
                    <h4 className="text-center">POS System</h4>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {/* Left Panel */}
                    <div className="lg:col-span-2">
                        {/* Search Bar - Categories */}
                        <div className="relative mt-3">
                            <input
                                type="text"
                                placeholder="Search Category..."
                                className="w-full p-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
                            />
                        </div>

                        {/* Categories Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-white p-6 rounded-md shadow-md text-center">
                                <h5 className="text-lg font-semibold">Categories</h5>
                            </div>
                        </div>

                        {/* Search Bar - Items */}
                        <div className="relative mt-3">
                            <input
                                type="text"
                                placeholder="Search Item..."
                                className="w-full p-2 rounded-md border border-gray-300 focus:ring focus:ring-blue-300"
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
                                        className="bg-gray-700 text-white px-2 py-1 rounded"
                                        onClick={() => setQuantity(quantity + 1)}
                                        aria-label="Increase Quantity"
                                    >
                                        +
                                    </button>
                                    <span className="text-lg">{quantity}</span>
                                    <button
                                        className="bg-gray-700 text-white px-2 py-1 rounded"
                                        onClick={() => setQuantity(Math.max(0, quantity - 1))}
                                        aria-label="Decrease Quantity"
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel (Cart) */}
                    <div className="bg-gray-800 text-white p-6 rounded-md shadow-md">
                        {/* Cart Table */}
                        <table className="w-full text-center mb-4">
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
                            <span id="subtotal">${(quantity * 10).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Discount</span>
                            <span id="discount">$0.00</span>
                        </div>
                        <div className="border-t border-gray-600 my-2"></div>
                        <div className="flex justify-between text-lg font-semibold">
                            <h5>Total</h5>
                            <h5 id="total">${(quantity * 10).toFixed(2)}</h5>
                        </div>

                        {/* Cart Buttons */}
                        <div className="flex justify-center gap-3 mt-4">
                            <a href="place_order/?view=order" className="bg-blue-500 px-4 py-2 rounded-md">
                                Place Order
                            </a>
                            <button className="bg-yellow-500 px-4 py-2 rounded-md">Save</button>
                            <button className="bg-gray-700 px-4 py-2 rounded-md">
                                <i className="fas fa-save"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
