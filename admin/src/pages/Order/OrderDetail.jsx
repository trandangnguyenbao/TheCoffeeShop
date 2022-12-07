import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import '../user/user.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import formatProductPrice from '../../Helper';

const OrderDetail = () => {
  let {id_order} = useParams();
  const [orderDetail, setOrderDetail] = useState([]);
    // const [user, setUser] = useState([]);
    useEffect(() => {
          const fetchOrderDetail = async () => {
              const {data} = await axios.get('/api/orderdetail/')
              setOrderDetail(data)
          }
          fetchOrderDetail();
      }, [])
    // const [page, setPage] = useState(1);
    // const [pageSize] = useState(8);
    // const indexOfLastItem = page*pageSize;
    // const indexOfFirstItem = indexOfLastItem - pageSize;
    // const currentItems = orderDetail.slice(indexOfFirstItem,indexOfLastItem);

    // const handlePage = (e,value)=>{
    //     setPage(value)
    // }
    return (
      <div className="container container__type">
              <h1 className="container__item">Chi Tiết Đơn Hàng</h1>
              <table className='orderdetail'>
                  <tr>
                      <th>Mã Đơn Hàng</th>
                      <th>Tên Sản Phẩm</th>
                      <th>Giá Tiền</th>
                      <th>Hình Ảnh</th>
                      <th>Số Lượng</th>
                      <th>Tổng Tiền</th>
                  </tr>
                  <tfoot>
                    {
                      orderDetail.map(order => {
                        if (order.id_order == id_order){
                            return (
                              order.children.map(orders => {
                                  return (
                                    <tr>
                                      <td><p>{order.id_order}</p></td>
                                      <td><p>{orders.title}</p></td>
                                      <td><p>{formatProductPrice(orders.cost)}</p></td>
                                      <td><img src={orders.image} alt="" /></td>
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

