import "./App.css";
import { useState } from "react";

function App() {
  const [formOne, setFormOne] = useState({
    orderNumber: "",
    purchaseDate: "",
    customerName: "",
    totalAmount: "",
    info: [],
  });

  const [formTwo, setFormTwo] = useState({
    itemName: "",
    quantity: "",
    price: "",
    overallPrice: "",
  });

  const [allOrders, setAllOrders] = useState([]);
  const [isError, setIsError] = useState(false);

  const validateAdd = () => {
    if (
      formTwo.itemName !== "" &&
      formTwo.quantity !== "" &&
      formTwo.price !== "" &&
      formTwo.overallPrice !== ""
    ) {
      return true;
    }
    setIsError(true);
    return false;
  };

  const validateSave = () => {
    if (
      formOne.orderNumber !== "" &&
      formOne.purchaseDate !== "" &&
      formOne.customerName !== "" &&
      formOne.totalAmount !== "" &&
      formOne.info.length !== 0
    ) {
      return true;
    }

    setIsError(true);
    return false;
  };

  const handleAdd = () => {
    if (validateAdd()) {
      setFormOne((prevs) => ({
        ...prevs,
        info: [...prevs.info, formTwo],
      }));
      setFormTwo({
        itemName: "",
        quantity: "",
        price: "",
        overallPrice: "",
      });
    }
  };

  const handleSave = () => {
    if (validateSave()) {
      setAllOrders((prevs) => [...prevs, formOne]);
      setFormOne({
        orderNumber: "",
        purchaseDate: "",
        customerName: "",
        totalAmount: "",
        info: [],
      });
    }
  };

  const handleRemove = (index) => {
    let updatedData = formOne.info.filter((_, inx) => inx !== index);
    setFormOne((prevs) => ({
      ...prevs,
      info: updatedData,
    }));
  };

  return (
    <div className="App">
      <div className="App-header">
        {/* FORM */}

        <div className="m-auto justify-center items-center bg-cyan-500 text-black w-[95%] min-h-80 pt-4 rounded-lg mt-10 pb-4">
          <span className="text-4xl font-bold">ORDER PAGE</span>

          <div className="flex flex-col ml-5">
            <div className="flex flex-row mt-5 m">
              <div className="text-left ml-3 flex flex-col ">
                <label className="font-medium">ORDER NUMBER</label>
                <input
                  onFocus={() => setIsError(false)}
                  value={formOne.orderNumber}
                  onChange={(e) => {
                    setFormOne((prevs) => ({
                      ...prevs,
                      orderNumber: e.target.value,
                    }));
                  }}
                  className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal pr-2"
                  placeholder="Enter Order Number..."
                  type="number"
                />
              </div>
              <div className="text-left ml-3 flex flex-col ">
                <label className="font-medium">PURCHASE DATE</label>
                <input
                  onFocus={() => setIsError(false)}
                  value={formOne.purchaseDate}
                  onChange={(e) => {
                    setFormOne((prevs) => ({
                      ...prevs,
                      purchaseDate: e.target.value,
                    }));
                  }}
                  className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal pr-2"
                  placeholder="Enter Purchase Date..."
                  type="date"
                />
              </div>
              <div className="text-left ml-3 flex flex-col ">
                <label className="font-medium ">CUSTOMER NAME</label>
                <input
                  onFocus={() => setIsError(false)}
                  value={formOne.customerName}
                  onChange={(e) => {
                    setFormOne((prevs) => ({
                      ...prevs,
                      customerName: e.target.value,
                    }));
                  }}
                  className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal "
                  placeholder="Enter Customer Name..."
                />
              </div>
              <div className="text-left ml-3 flex flex-col ">
                <label className="font-medium">OVERALL AMOUNT</label>
                <input
                  onFocus={() => setIsError(false)}
                  value={formOne.totalAmount}
                  onChange={(e) => {
                    setFormOne((prevs) => ({
                      ...prevs,
                      totalAmount: e.target.value,
                    }));
                  }}
                  className="rounded-sm pl-2 text-base h-9 w-[250px] font-normal pr-2"
                  placeholder="Enter Overall Amount..."
                  type="number"
                />
              </div>
            </div>
            {formOne.info?.length > 0 &&
              formOne.info.map((info, index) => (
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
          </div>

          {isError && (
            <div className="mt-5">
              <span className="text-lg font-medium text-red-600">
                Please Enter All The Fields !!!
              </span>
            </div>
          )}
          <div className="mt-6 ">
            <button
              onClick={handleSave}
              className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 w-[100px] py-[3px] text-white rounded-md font-semibold"
            >
              SAVE
            </button>
          </div>
        </div>

        {/* ORDER TABLE */}

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
                        <span>Name: {data.itemName}</span>
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
      </div>
    </div>
  );
}

export default App;
