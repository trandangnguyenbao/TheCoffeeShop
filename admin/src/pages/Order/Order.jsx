import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../user/user.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import formatProductPrice from '../../Helper'
const Order = () => {
    const [order, setOrder] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    useEffect(() => {
          const fetchOrder = async () => {
              const {data} = await axios.get('/api/order/')
              setOrder(data)
              setSearchApiData(data);
          }
          fetchOrder();
      }, [])

      const [user, setUser] = useState([]);
    useEffect(() => {
          const fetchUser = async () => {
              const {data} = await axios.get('/api/user')
              setUser(data)
          }
          fetchUser();
      }, [])

    const [value, setValue] = useState();

      const handleSearch = async (e) => {
         if(e.target.value ===''){
          setOrder(searchApiData)
         }else{
          const filterResult = searchApiData.filter(item =>item.name.toLowerCase().includes(e.target.value.toLowerCase()));
          // const filterResult = searchApiData.filter(item =>item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.catalog.toLowerCase().includes(e.target.value.toLowerCase()));
          setOrder(filterResult);
         }
         setValue(e.target.value)
      };

    const deleteOrder = async (id) => {
        console.log(id)
        let result = await fetch(`/api/Order/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result){
            return order;
        }
    }

    const [page, setPage] = useState(1);
     const [pageSize] = useState(8);
     const indexOfLastItem = page*pageSize;
     const indexOfFirstItem = indexOfLastItem - pageSize;
     const currentItems = order.slice(indexOfFirstItem,indexOfLastItem);

    const handlePage = (e,value)=>{
        setPage(value)
    }
    return (
      <div className="container container__type">
              <h1 className="container__item">Danh Sách Đơn Hàng</h1>
              <ul className="container__item">
                  <li className="container__item">
                      <Link to = {''}>Thêm Đơn Hàng</Link>
                  </li>
                  <li className="container__item">
                      <form action="" >
                          <input type="text" placeholder='Tìm kiếm đơn hàng'  value={value} onChange={(e) => handleSearch(e)} />
                          <input type="submit" value='Tìm kiếm' /></form>
                  </li>
              </ul>
              <table className='order'>
                  <tr>
                      <th>ID</th>
                      <th>Số Điện Thoại</th>
                      <th>Tổng Tiền</th>
                      <th>Địa Chỉ</th>
                      <th>Trạng Thái</th>
                      <th>Chức Năng</th>
                  </tr>
                  
                      {
                         currentItems.map((order) => {
                              return (
                                  <tr key={order.id_order}>
                                      <td><p>{order.id_order}</p></td>
                                      <td><p>{order.name}</p></td>
                                      <td><p>{formatProductPrice(order.totalPrice)}</p></td>
                                      {
                                        user.map(user => {
                                            if (user.phone === order.name){
                                                return (
                                                    <td><p>{user.address}</p></td>
                                                )
                                            }
                                        })
                                        }
                                      <td><p>{order.status}</p></td>
                                      <td className='action'>
                                          <button className = "update__item"><Link to={`/order/update/${order._id}`}>Sửa</Link></button>
                                          <button className = 'delete__item'><Link to={`/order/detail/${order.id_order}`}>Xem</Link></button>
                                      </td>
                                  </tr>
                              )
                          })
                      }
              </table>
            <Stack spacing={2}>
                <Pagination count={(order.length%pageSize===0)?(order.length/pageSize):(Math.floor(order.length/pageSize+1))} page={page}  onChange={handlePage} color="primary" />
            </Stack>
          </div>
  )
}

export default Order