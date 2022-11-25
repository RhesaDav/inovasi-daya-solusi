import moment from 'moment/moment'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Add() {
  let navigate = useNavigate()
  const handleAddData = (e) => {
    e.preventDefault()
    const data = JSON.parse(localStorage.getItem('data'))
    const getLastId = data[data.length -1].id
    const incrementId = getLastId+1
    const formData = {
      id: incrementId,
      customerName: e.target[0].value,
      amount: e.target[1].value,
      productName: e.target[2].value,
      productId: e.target[2].value === "Test 1" ? "10001" : "10002",
      status: 0,
      transactionDate: moment(new Date()).format('YYYY-DD-MM HH:mm:ss'),
      createBy: e.target[0].value,
      createOn: moment(new Date()).format('YYYY-DD-MM HH:mm:ss')
    }
    console.log(formData)
    const newArray = [...data, formData]
    localStorage.setItem('data', JSON.stringify(newArray))
    navigate('/')
  }
  return (
    <div className='flex justify-center m-10'>
      <form onSubmit={handleAddData} className='bg-gray-200 p-5 flex flex-col gap-5 rounded-2xl shadow-xl'>
        <h1 className='font-semibold text-center'>Add New</h1>
        <div>
          <h1>Customer Name:</h1>
          <input className='border' type="text" />
        </div>
        <div>
          <h1>Amount:</h1>
          <input className='border' type="text" />
        </div>
        <div>
          <h1>Product Name:</h1>
          <select>
            <option value="Test 1">Test 1</option>
            <option value="Test 2">Test 2</option>
          </select>
        </div>
        <div className='flex justify-center'>
        <button className='bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded-xl'>Add</button>
        </div>
      </form>
    </div>
  )
}
