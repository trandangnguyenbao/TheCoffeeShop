import './catalog.css'

import { API_BASE_URL } from '../../config';
import { Link } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import React from 'react'
import Stack from '@mui/material/Stack';
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Catalog = () => {
    const history = useNavigate();
    const [Catalogs, setCaTaLogs] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    useEffect(() => {
        const fetchCatalogs = async() => {
            const {data} = await axios.get(`${API_BASE_URL}/api/cataloges/`)
            setCaTaLogs(data)
            setSearchApiData(data);
        }
        fetchCatalogs();
    }, [])

    const [Products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`${API_BASE_URL}/api/collections/`)
            setProducts(data)
        }
        fetchProducts();
    }, [])

    const [value, setValue] = useState();

    const handleSearch = async (e) => {
       if(e.target.value ===''){
        setCaTaLogs(searchApiData)
       }else{
        const filterResult = searchApiData.filter(item =>item.name.toLowerCase().includes(e.target.value.toLowerCase()));
        // const filterResult = searchApiData.filter(item =>item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.catalog.toLowerCase().includes(e.target.value.toLowerCase()));
        setCaTaLogs(filterResult);
       }
       setValue(e.target.value)
    };

    const deleteCatalog = async (id) => {
        let result = await fetch(`${API_BASE_URL}/api/cataloges/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result){
            return Catalogs;
        }
    }

    const [page, setPage] = useState(1);
     const [pageSize] = useState(8);
     const indexOfLastItem = page*pageSize;
     const indexOfFirstItem = indexOfLastItem - pageSize;
     const currentItems = Catalogs.slice(indexOfFirstItem,indexOfLastItem);

    const handlePage = (e,value)=>{
        setPage(value)
    }
  return (
    <div className="container container__type">
        <h1 className="container__item">Danh Sách Loại Hàng</h1>
        <ul className="container__item">
            <li className="container__item">
                <form action="">
                <input type="text" placeholder='Tìm kiếm loại hàng' value={value} onChange={(e) => handleSearch(e)} />
                <input type="submit" value='Tìm kiếm' /></form>
            </li>
        </ul>
        <table>
            <tr>
                <th>Mã Loại Hàng</th>
                <th>Tên Loại Hàng</th>
                <th>Hình Ảnh</th>
                <th>Số Sản Phẩm</th>
                <th>Mô Tả</th>
                <th>Chi Tiết</th>
            </tr>
            
                {
                    currentItems.map((catalog, index) => {
                                return (
                                    <tr>
                                        <td><p>{index}</p></td>
                                        <td><p>{catalog.name}</p></td>
                                        <td><img src={catalog.img} alt="" /></td>
                                        <td><p>{catalog.sanpham}</p></td>
                                        <td><p>{catalog.discript}</p></td>
                                        <td><p><Link to={`/catalog/detail/${catalog.path}`}>Xem Chi Tiết</Link></p></td>
                                    </tr>
                        )
                    })
                }
        </table>
        <Stack spacing={2}>
            <Pagination count={(Catalogs.length%pageSize===0)?(Catalogs.length/pageSize):(Math.floor(Catalogs.length/pageSize+1))} page={page}  onChange={handlePage} color="primary" />
        </Stack>
    </div>
  )
}

export default Catalog