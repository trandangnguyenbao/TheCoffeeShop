import './manageorder.css'

import { useMemo, useState } from 'react'

import { API_BASE_URL } from '../../config';
import { Link } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import React from 'react'
import Stack from '@mui/material/Stack';
import axios from 'axios'
import formatProductPrice from '../../Helper/index.js'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ManageOrder = () => {
    const [Order, setOrder] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    // const [page, setPage] = useState(1);
    // const [pageSize] = useState(8);
    const history = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (!userInfo) {
            history("/account/login")
        }
    }, [history])
    
    useEffect(() => {
        const fetchOrder = async () => {
            const {data} = await axios.get(`${API_BASE_URL}/api/orderBranch/`)
            setOrder(data);
            setSearchApiData(data);
        }
        fetchOrder();
    }, [])

    const [value, setValue] = useState();

    const handleSearch = async (e) => {
       if(e.target.value ===''){
        setOrder(searchApiData)
       }else{
        const filterResult = searchApiData.filter(item =>item.phone.toLowerCase().includes(e.target.value.toLowerCase()));
        // const filterResult = searchApiData.filter(item =>item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.catalog.toLowerCase().includes(e.target.value.toLowerCase()));
        setOrder(filterResult);

       }
       setValue(e.target.value)
    };


    const deleteOrder = async (id) => {
        // console.log(id)
        let result = await fetch(`${API_BASE_URL}/api/orderBranch/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result){
            return Order;
        }
        history('/manage-order')
    }


     //Phan trang
     const [page, setPage] = useState(1);
     const [pageSize] = useState(8);
     const indexOfLastItem = page*pageSize;
     const indexOfFirstItem = indexOfLastItem - pageSize;
     const currentItems = Order.slice(indexOfFirstItem,indexOfLastItem);
    

    const handlePage = (e,value)=>{
        setPage(value)
    }

    return (
        <div className="container container__type">
            <h1 className="container__item">Danh Sách Đơn Hàng</h1>
            <ul className="container__item">
                <li className="container__item">
                    <form action="" onSubmit={handleSearch}>
                        <input type="text" placeholder='Tìm kiếm đơn hàng' value={value} onChange={(e) => handleSearch(e)} />
                        <input type="submit" value='Tìm kiếm' /></form>
                </li>
            </ul>
            <table className='orderBranch'>
                <tr>
                    <th>STT</th>
                    <th>Số Điện Thoại</th>
                    <th>Số Lượng</th>
                    <th>Tổng Tiền</th>
                    <th>Chi Tiết</th>
                    <th>Chức Năng</th>
                </tr>
                
                    {
                         currentItems.map((order, index) => {
                            if(order.chinhanh === userInfo.chinhanh){
                                return (
                                    <tr>
                                        <td><p>{index+1}</p></td>
                                        <td><p>{order.phone}</p></td>
                                        <td><p>{order.soluong}</p></td>
                                        <td><p>{formatProductPrice(order.tongtien)}</p></td>
                                        <td><Link to = {`/manage-order/${order.id_order}`}>Xem chi Tiết</Link></td>
                                        <td>
                                            <Link onClick={() => deleteOrder(order._id)} className = 'delete__item'>Xóa</Link>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
            </table>
            <Stack spacing={2}>
                <Pagination count={(Order.length%pageSize===0)?(Order.length/pageSize):(Math.floor(Order.length/pageSize+1))} page={page}  onChange={handlePage} color="primary" />
            </Stack>
        </div>
      )
}

export default ManageOrder