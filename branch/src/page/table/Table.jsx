import React from 'react'
import { Link } from 'react-router-dom'
import './table.css'
import { useState, useMemo } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import formatProductPrice from '../../Helper/index.js'
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Table = () => {
    const history = useNavigate();
    const [userName, setUserName] = useState('');
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (!userInfo) {
            history("/account/login")
        }
    }, [history])
    const [OrderTable, setOrderTable] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    
    useEffect(() => {
        const fetchOrderTable = async () => {
            const {data} = await axios.get('/api/ordertable/')
            setOrderTable(data);
            setSearchApiData(data);
        }
        fetchOrderTable();
    }, [])

    const [value, setValue] = useState();

    const handleSearch = async (e) => {
       if(e.target.value ===''){
       setOrderTable(searchApiData)
       }else{
        const filterResult = searchApiData.filter(item =>item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.phone.toLowerCase().includes(e.target.value.toLowerCase()));
        // const filterResult = searchApiData.filter(item =>item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.catalog.toLowerCase().includes(e.target.value.toLowerCase()));
        setOrderTable(filterResult);

       }
       setValue(e.target.value)
    };


    const deleteOrderTable = async (id) => {
        let result = await fetch(`/api/orderTable/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result){
            return OrderTable;
        }
        history('/table')
    }


     //Phan trang
     const [page, setPage] = useState(1);
     const [pageSize] = useState(8);
     const indexOfLastItem = page*pageSize;
     const indexOfFirstItem = indexOfLastItem - pageSize;
     const currentItems = OrderTable.slice(indexOfFirstItem,indexOfLastItem);
    

    const handlePage = (e,value)=>{
        setPage(value)
    }

    return (
        <div className="container container__type">
            <h1 className="container__item">Danh Sách Đặt Bàn</h1>
            <ul className="container__item">
                <li className="container__item">
                    <Link to = {'/addTableOrder'}>Đặt Bàn</Link>
                </li>
                <li className="container__item">
                    <form action="" onSubmit={handleSearch}>
                        <input type="text" placeholder='Tìm kiếm sản phẩm' value={value} onChange={(e) => handleSearch(e)} />
                        <input type="submit" value='Tìm kiếm' /></form>
                </li>
            </ul>
            <table className='ordertable'>
                <tr>
                    <th>STT</th>
                    <th>Họ Và Tên</th>
                    <th>SĐT</th>
                    <th>Số Lượng</th>
                    <th>Ghi Chú</th>
                    <th>Chi Nhánh</th>
                    <th>Chức năng</th>
                </tr>
                
                    {
                         currentItems.map((ordertable, index) => {
                            if(ordertable.chinhanh === userInfo.chinhanh){
                                return (
                                    <tr>
                                        <td><p>{index+1}</p></td>
                                        <td><p>{ordertable.name}</p></td>
                                        <td><p>{ordertable.phone}</p></td>
                                        <td><p>{ordertable.Soluong}</p></td>
                                        <td><p>{ordertable.note}</p></td>
                                        <td><p>{ordertable.chinhanh}</p></td>
                                        <td>
                                            <Link className = "update__item" to={`/table/update/${ordertable._id}`}>Sửa</Link>
                                            <Link onClick={() => deleteOrderTable(ordertable._id)} className = 'delete__item'>Xóa</Link>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
            </table>
            <Stack spacing={2}>
                <Pagination count={(OrderTable.length%pageSize===0)?(OrderTable.length/pageSize):(Math.floor(OrderTable.length/pageSize+1))} page={page}  onChange={handlePage} color="primary" />
            </Stack>
        </div>
      )
}

export default Table