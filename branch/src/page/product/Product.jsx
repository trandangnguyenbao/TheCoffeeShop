import './product.css'

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

const Product = () => {
    const [Products, setProducts] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    // const [page, setPage] = useState(1);
    // const [pageSize] = useState(8);
    const history = useNavigate();
    
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`${API_BASE_URL}/api/collections/`)
            setProducts(data);
            setSearchApiData(data);
        }
        fetchProducts();
    }, [])

    const [value, setValue] = useState();

    const handleSearch = async (e) => {
       if(e.target.value ===''){
        setProducts(searchApiData)
       }else{
        const filterResult = searchApiData.filter(item =>item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.catalog.toLowerCase().includes(e.target.value.toLowerCase()));
        // const filterResult = searchApiData.filter(item =>item.title.toLowerCase().includes(e.target.value.toLowerCase()) || item.catalog.toLowerCase().includes(e.target.value.toLowerCase()));
        setProducts(filterResult);

       }
       setValue(e.target.value)
    };


    const deleteProduct = async (id) => {
        let result = await fetch(`${API_BASE_URL}/api/collections/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result){
            return Products;
        }
        history('/product')
    }


     //Phan trang
     const [page, setPage] = useState(1);
     const [pageSize] = useState(8);
     const indexOfLastItem = page*pageSize;
     const indexOfFirstItem = indexOfLastItem - pageSize;
     const currentItems = Products.slice(indexOfFirstItem,indexOfLastItem);
    

    const handlePage = (e,value)=>{
        setPage(value)
    }

    return (
        <div className="container container__type">
            <h1 className="container__item">Danh Sách Sản Phẩm</h1>
            <ul className="container__item">
                <li className="container__item">
                    <Link to = {'/add-product'}>Thêm Sản Phẩm</Link>
                </li>
                <li className="container__item">
                    <form action="" onSubmit={handleSearch}>
                        <input type="text" placeholder='Tìm kiếm sản phẩm' value={value} onChange={(e) => handleSearch(e)} />
                        <input type="submit" value='Tìm kiếm' /></form>
                </li>
            </ul>
            <table className='product'>
                <tr>
                    <th>Mã Sản Phẩm</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Giá</th>
                    <th>Loại Sản Phẩm</th>
                    <th>Mô Tả</th>
                </tr>
                
                    {
                         currentItems.map((product, index) => {
                            return (
                                <tr>
                                    <td><p>{index+1}</p></td>
                                    <td><p>{product.title}</p></td>
                                    <td><img src={product.img} alt="" /></td>
                                    <td><p>{formatProductPrice(product.cost)}</p></td>
                                    <td><p>{product.catalog}</p></td>
                                    <td><p>{product.descript}</p></td>
                                </tr>
                            )
                        })
                    }
            </table>
            <Stack spacing={2}>
                <Pagination count={(Products.length%pageSize===0)?(Products.length/pageSize):(Math.floor(Products.length/pageSize+1))} page={page}  onChange={handlePage} color="primary" />
            </Stack>
        </div>
      )
}

export default Product