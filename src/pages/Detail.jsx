import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  let { id } = useParams();
  let navigate = useNavigate()
  const [detail, setDetail] = useState({});

  const loadDataDetail = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    const findDetail = data.find((item) => item.id === parseInt(id));
    setDetail(findDetail);
    console.log(findDetail)
  };

  useEffect(() => {
    loadDataDetail();
  }, []);
  return (
    <div className='flex justify-center m-10'>
      <div className='bg-gray-200 p-5 flex flex-col gap-5 rounded-2xl shadow-xl'>
        <h1 className='font-semibold text-center'>Add New</h1>
        <table className="border border-black">
          <tbody>
          <tr className="border border-black">
            <td className="w-32">ID</td>
            <td>{detail.id}</td>
          </tr>
          <tr className="border border-black">
            <td className="w-32">Customer Name</td>
            <td>{detail.customerName}</td>
          </tr>
          <tr className="border border-black">
            <td className="w-32">Product ID</td>
            <td>{detail.productID}</td>
          </tr>
          <tr className="border border-black">
            <td className="w-32">Product Name</td>
            <td>{detail.productName}</td>
          </tr>
          <tr className="border border-black">
            <td className="w-32">Status</td>
            <td>{detail.status === 1? 'Failed' : 'Success'}</td>
          </tr>
          <tr className="border border-black">
            <td className="w-32">Created By</td>
            <td>{detail.createBy}</td>
          </tr>
          <tr className="border border-black">
            <td className="w-32">Created On</td>
            <td>{detail.createOn}</td>
          </tr>
          </tbody>
        </table>
        <div className='flex justify-center'>
        <button className='bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded-xl' onClick={() => navigate('/')}>Back</button>
        </div>
      </div>
    </div>
  );
}
