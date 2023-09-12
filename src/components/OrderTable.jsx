import React from "react";

const OrderTable = ({allOrders}) => {
  return (
    <div className="bg-black m-auto w-[95%] min-h-40 rounded-lg mt-4 ">
      <div className="mt-3 pt-2">
        <span className="text-2xl text-white font-bold underline underline-offset-4">
          YOUR ORDERS
        </span>
      </div>

      <div className="flex flex-col m-auto justify-center  text-black">
        {allOrders.length !== 0 &&
          allOrders.map((items, index) => (
            <div
              key={index}
              className="flex flex-row m-auto space-x-10 px-20  py-4 rounded-md bg-white mb-5 mt-5"
            >
              <div className="bg-cyan-400 text-2xl  pt-4  text-black font-semibold rounded-md px-4">
                <div className="flex flex-col space-y-6 text-left ">
                  <span className=" underline underline-offset-8 font-bold">
                    Order Number: {items.orderNumber}
                  </span>
                  <span>Customer Name: {items.customerName}</span>
                  <span>Order Date: {items.purchaseDate}</span>
                </div>
              </div>
              <div className="flex flex-col text-white font-semibold text-xl bg-amber-400 px-10 rounded-md py-4">
                {items.info.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col text-left bg-black px-3 py-2 rounded-md mt-2   "
                  >
                    <span>Item Name: {data.itemName}</span>
                    <span>Price Per Unit: $ {data.price} </span>
                    <span>Quantity: {data.quantity} Piece</span>
                    <span>Total Price: {data.overallPrice} $</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        {/* EMPTY ORDER */}

        {allOrders.length === 0 && (
          <div className=" mt-10 mb-6 ">
            <span className="text-3xl text-white font-bold ">
              Sorry !! No Order To Display :)
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTable;
