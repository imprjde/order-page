import React from "react";

const FormDetail = ({ setIsError, formTwo, setFormTwo, handleAdd }) => {
  return (
    <div className="flex flex-row mt-5">
      <div className="text-left ml-3 flex flex-col ">
        <label className="font-medium">ENTER ITEM NAME</label>
        <input
          onFocus={() => setIsError(false)}
          value={formTwo.itemName}
          onChange={(e) =>
            setFormTwo((prevs) => ({
              ...prevs,
              itemName: e.target.value,
            }))
          }
          className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal"
          placeholder="Enter Item Name..."
        />
      </div>
      <div className="text-left ml-3 flex flex-col ">
        <label className="font-medium">ENTER QUANTITY</label>
        <input
          onFocus={() => setIsError(false)}
          value={formTwo.quantity}
          onChange={(e) =>
            setFormTwo((prevs) => ({
              ...prevs,
              quantity: e.target.value,
            }))
          }
          className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal pr-2"
          placeholder="Enter Quantity..."
          type="number"
        />
      </div>
      <div className="text-left ml-3 flex flex-col ">
        <label className="font-medium">ENTER PRICE PER UNIT</label>
        <input
          onFocus={() => setIsError(false)}
          value={formTwo.price}
          onChange={(e) =>
            setFormTwo((prevs) => ({
              ...prevs,
              price: e.target.value,
            }))
          }
          className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal pr-2"
          placeholder="Enter Price Per Unit..."
          type="number"
        />
      </div>
      <div className="text-left ml-3 flex flex-col ">
        <label className="font-medium"> TOTAL AMOUNT</label>
        <input
          onFocus={() => setIsError(false)}
          value={formTwo.overallPrice}
          onChange={(e) =>
            setFormTwo((prevs) => ({
              ...prevs,
              overallPrice: e.target.value,
            }))
          }
          className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal pr-2"
          placeholder="Enter Total Amount..."
          type="number"
        />
      </div>

      <div className="text-left ml-3  flex flex-col ">
        <label>‎ </label>
        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-green-400 via-green-600 to-green-800  text-white px-5 rounded-md font-medium py-1 mt-[2px] "
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default FormDetail;
