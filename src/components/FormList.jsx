import React from "react";

const FormList = ({ formOne, setIsError, handleRemove }) => {
  return (
    <div>
      {formOne.info.map((info, index) => (
        <div key={index} className="flex flex-row mt-5">
          <div className="text-left ml-3 flex flex-col ">
            <label className="font-medium">ENTER ITEM NAME</label>
            <input
              value={info.itemName}
              onChange={() => setIsError(false)}
              className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal"
              placeholder="Enter Item Name..."
            />
          </div>
          <div className="text-left ml-3 flex flex-col ">
            <label className="font-medium">ENTER QUANTITY</label>
            <input
              value={info.quantity}
              onChange={() => setIsError(false)}
              className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal pr-2"
              placeholder="Enter Quantity..."
              type="number"
            />
          </div>
          <div className="text-left ml-3 flex flex-col ">
            <label className="font-medium">ENTER PRICE PER UNIT</label>
            <input
              value={info.price}
              onChange={() => setIsError(false)}
              className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal pr-2"
              placeholder="Enter Price Per Unit..."
              type="number"
            />
          </div>
          <div className="text-left ml-3 flex flex-col ">
            <label className="font-medium"> TOTAL AMOUNT</label>
            <input
              value={info.overallPrice}
              onChange={() => setIsError(false)}
              className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal pr-2"
              placeholder="Enter Total Amount..."
              type="number"
            />
          </div>

          <div className="text-left ml-4  flex flex-col ">
            <label>‎ </label>
            <button
              onClick={() => handleRemove(index)}
              className="bg-gradient-to-r from-red-400 via-red-600 to-red-800  text-white px-5 rounded-md font-medium py-1 mt-[2px] "
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormList;
