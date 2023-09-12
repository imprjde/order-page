import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import FormList from "./components/FormList";
import OrderTable from "./components/OrderTable";
import FormDetail from "./components/FormDetail";

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
            <Form
              setFormOne={setFormOne}
              setIsError={setIsError}
              formOne={formOne}
            />
            {formOne.info?.length > 0 && (
              <FormList
                formOne={formOne}
                setIsError={setIsError}
                handleRemove={handleRemove}
              />
            )}
            <FormDetail
              setIsError={setIsError}
              formTwo={formTwo}
              setFormTwo={setFormTwo}
              handleAdd={handleAdd}
            />
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

        <OrderTable allOrders={allOrders} />
      </div>
    </div>
  );
}

export default App;
