import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit() {
  let { id } = useParams();
  let navigate = useNavigate()
  const [detail, setDetail] = useState({});
  const [dataList, setDataList] = useState([]);

  const loadDataDetail = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    setDataList(data);
    const findDetail = data.find((item) => item.id === parseInt(id));
    setDetail(findDetail);
  };

  const handleEditData = (e) => {
    e.preventDefault();
    const formData = {
      customerName: e.target[0].value,
      amount: e.target[1].value,
      productName: e.target[2].value,
      productId: e.target[2].value === "Test 1" ? "10001" : "10002",
      status: 0,
      createBy: e.target[0].value,
      createOn: detail.createOn,
      transactionDate: detail.transactionDate,
      id: detail.id,
    };
    const findIndex = dataList.findIndex((item) => item.id === detail.id);
    dataList[findIndex] = formData;
    console.log(dataList);
    localStorage.setItem("data", JSON.stringify(dataList));
    navigate('/')
  };

  useEffect(() => {
    loadDataDetail();
  }, []);

  return (
    <div className="flex justify-center m-10">
      <form
        onSubmit={handleEditData}
        className="bg-gray-200 p-5 flex flex-col gap-5 rounded-2xl shadow-xl"
      >
        <h1 className="font-semibold text-center">Edit</h1>
        <div>
          <h1>Customer Name:</h1>
          <input className="border" type="text" defaultValue={detail.customerName} />
        </div>
        <div>
          <h1>Amount:</h1>
          <input className="border" type="text" defaultValue={detail.amount} />
        </div>
        <div>
          <h1>Product Name:</h1>
          <select defaultValue={detail.productName}>
            <option value="Test 1">Test 1</option>
            <option value="Test 2">Test 2</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded-xl">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
