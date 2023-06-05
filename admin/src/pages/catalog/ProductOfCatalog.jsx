import '../product/product.css'

import { Link, useParams } from 'react-router-dom'

import { API_BASE_URL } from '../../config';
import Pagination from '@mui/material/Pagination';
import Product from '../product/Product'
import React from 'react'
import Stack from '@mui/material/Stack';
import axios from 'axios'
import formatProductPrice from '../../Helper/index.js'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const ProductOfCatalog = ({match}) => {
    let {path} = useParams()
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
        setProducts(searchApiData)
       }else{
        const filterResult = searchApiData.filter(item =>item.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setProducts(filterResult);

       }
       setValue(e.target.value)
    };

    const deleteProduct = async (id) => {
        console.log(id)
        let result = await fetch(`${API_BASE_URL}/api/collections/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result){
            return Products;
        }
        history('/product')
    }

    return (
        <div className="container container__type">
            <h1 className="container__item">Danh Sách Sản Phẩm Theo Loại</h1>
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
                    <th>Chức Năng</th>
                </tr>
                    {
                        Catalogs.map(catalog => {
                            if (catalog.path === path) {
                                return (
                                    Products.map((Product, index) => {
                                        if (Product.catalog === catalog.name){
                                            return (
                                                <tr>
                                                    <td><p>{index}</p></td>
                                                    <td><p>{Product.title}</p></td>
                                                    <td><img src={Product.img} alt="" /></td>
                                                    <td><p>{formatProductPrice(Product.cost)}</p></td>
                                                    <td><p>{Product.catalog}</p></td>
                                                    <td><p>{Product.descript}</p></td>
                                                    <td>
                                                        <Link className = "update__item" to={`/product/${Product._id}`}>Sửa</Link>
                                                        <Link onClick={() => deleteProduct(Product._id)} className = 'delete__item'>Xóa</Link>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })
                                )
                            }
                        })
                    }
            </table>
        </div>
      )
}

export default ProductOfCatalog