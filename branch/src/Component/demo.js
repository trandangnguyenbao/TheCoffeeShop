import React from 'react'
import { Link } from 'react-router-dom'
import './catalog.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
    const history = useNavigate();
    const [Catalogs, setCaTaLogs] = useState([]);
    useEffect(() => {
        const fetchCatalogs = async() => {
            const {data} = await axios.get('/api/cataloges/')
            setCaTaLogs(data)
        }
        fetchCatalogs();
    }, [])

    const [Products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/collections/')
            setProducts(data)
        }
        fetchProducts();
    }, [])

    const deleteCatalog = async (id) => {
        let result = await fetch(`/api/cataloges/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result){
            return Catalogs;
        }
    }
  return (
    <div className="container container__type">
        <h1 className="container__item">Danh Sách Loại Hàng</h1>
        <ul className="container__item">
            <li className="container__item">
                <Link to = {"/add-catalog"}>Thêm Loại Hàng</Link>
            </li>
            <li className="container__item">
                <form action="">
                <input type="text" placeholder='Tìm kiếm loại hàng' />
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
                <th>Chức Năng</th>
            </tr>
            
                {
                    Catalogs.map((catalog, index) => {
                                return (
                                    <tr>
                                        <td><p>{index}</p></td>
                                        <td><p>{catalog.name}</p></td>
                                        <td><img src={catalog.img} alt="" /></td>
                                        <td><p><Link to={`/catalog/detail/${catalog.path}`}>{catalog.sanpham}</Link></p></td>
                                        <td><p>{catalog.discript}</p></td>
                                        <td>
                                            <Link className = "update__item" to={`/catalog/${catalog._id}`}>Sửa</Link>
                                            <Link onClick={() => deleteCatalog(catalog._id)} className = 'delete__item'>Xóa</Link>
                                        </td>
                                    </tr>
                        )
                    })
                }
        </table>
    </div>
  )
}

export default Catalog