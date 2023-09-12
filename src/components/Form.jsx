import React from 'react'

const Form = ({setIsError,formOne,setFormOne}) => {
  return (
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
  )
}

export default Form