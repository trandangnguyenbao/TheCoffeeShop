import '../manageOrder/manageorder.css'

import React, { useEffect, useState } from 'react'

import { API_BASE_URL } from '../../config'
import axios from 'axios'
import formatProductPrice from '../../Helper'
import { useParams } from 'react-router-dom'

// import './branch.css'


const OrderDetail = () => {
  let {id_order} = useParams(); 

    // FETCH DATA ORDER
    const [Order, setOrder] = useState([]);
   useEffect(() => {
    const fetchOrder = async () => {
        const {data} = await axios.get(`${API_BASE_URL}/api/orderBranchDetail/`)
        setOrder(data);
    }
    fetchOrder();
}, [])

console.log(id_order)
  
    return (
        <div className="container container__type">
            <h1 className="container__item">Chi Tiết Đơn Hàng</h1>
            <table className='orderBranch'>
                <tr>
                    <th>Mã Đơn Hàng</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá Tiền</th>
                    <th>Số Lượng</th>
                    <th>Tổng Tiền</th>
                </tr>
                <tfoot>
                    {
                        Order.map(order => {
                            if (order.id_order == id_order){
                                return (
                                    order.children.map(orders => {
                                        return (
                                            <tr>
                                                <td><p>{order.id_order}</p></td>
                                                <td><p>{orders.title}</p></td>
                                                <td><p>{formatProductPrice(orders.cost)}</p></td>
                                                <td><p>{orders.soluong}</p></td>
                                                <td><p>{formatProductPrice(orders.tongtien)}</p></td>
                                            </tr>
                                        )
                                    })
                                )
                            }
                        })
                    }
                </tfoot>
            </table>
        </div>
      )
}

export default OrderDetail