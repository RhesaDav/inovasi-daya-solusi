import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jsonFile from "../assets/viewData.json";

export default function Home() {
  let navigate = useNavigate();
  const [data, setData] = useState(jsonFile.data);

  const loadListData = () => {
    if (!localStorage.getItem("data")) {
      setData(jsonFile.data);
      localStorage.setItem("data", JSON.stringify(jsonFile.data));
    } else {
      const parse = JSON.parse(localStorage.getItem("data"));
      setData(parse);
    }
  };

  const handleDetailButton = (id) => {
    console.log(id);
    navigate("/detail/" + id);
  };

  useEffect(() => {
    loadListData()
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <table className="border m-5 bg-white">
        <thead>
          <tr className="border font-bold text-center">
            <td className="border">id</td>
            <td className="border">Customer Name</td>
            <td className="border">Transaction Date</td>
            <td className="border w-48">Action</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index} className='border'>
              <td className="border pl-5">{item.id}</td>
              <td className="border pl-5">{item.customerName}</td>
              <td className="border pl-5">{item.transactionDate}</td>
              <td className="w-48 flex justify-around">
                <button className="bg-red-100 px-5 py-2 m-1 rounded-2xl hover:bg-red-200" onClick={() => handleDetailButton(item.id)}>
                  Details
                </button>
                <button className="bg-red-100 px-5 py-2 m-1 rounded-2xl hover:bg-red-200" onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
