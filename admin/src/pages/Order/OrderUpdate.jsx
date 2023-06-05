import { useNavigate, useParams } from 'react-router-dom'

import { API_BASE_URL } from '../../config'
import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const OrderUpdate = () => {
  let {id} = useParams()
  const history = useNavigate();
  const [status, setStatus] = useState('Đã Nhận Hàng');

  const handleSubmit = ()=>{
    const data = {
        status: status,
    }

    // console.log(id)
    axios.put(`${API_BASE_URL}/api/order/update/${id}`,data).then(function (response) {
        console.log(response);
        console.log(id)
      })
      .catch(function (error) {
        console.log(error);
        history("/")
      });
    alert('Cập nhật Đơn Hàng Thành Công!');
      history("/order")
  }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Cập Nhật Đơn Hàng</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>Trạng Thái Đơn Hàng</p>
                <select name="" id="" onChange={(e)=>setStatus(e.target.value)}>
                  <option value= "Đã Giao Hàng">Đã Giao Hàng</option>
                  <option value= "Đã Nhận Hàng">Đã Nhận Hàng</option>
                  <option value= "Đang Giao Hàng">Đang Giao Hàng</option>
                </select>
            </div>
            <button type='submit'>Cập Nhật Đơn Hàng</button>
        </form>
        </div>
    </div>
  )
}

export default OrderUpdate