import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import formatProductPrice from '../Helper'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const history = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (!userInfo) {
            history("/account/login")
        }
    }, [history])
    const [Products, setProducts] = useState([]);
    var number = 0;
      useEffect(() => {
          const fetchProducts = async () => {
              const {data} = await axios.get('/api/collections/')
              setProducts(data)
          }
          fetchProducts();
      }, [])
  
    // GET DATA CATALOG
    const [Catalogs, setCaTaLogs] = useState([]);
      useEffect(() => {
          const fetchCatalogs = async() => {
              const {data} = await axios.get('/api/cataloges/')
              setCaTaLogs(data)
          }
          fetchCatalogs();
      }, [])
    // GET DATA Table
    const [OrderTable, setOrderTable] = useState([]);
    
    useEffect(() => {
        const fetchOrderTable = async () => {
            const {data} = await axios.get('/api/ordertable/')
            setOrderTable(data);
        }
        fetchOrderTable();
    }, [])
    // GET DATA CATALOG
    const [Staff, setStaff] = useState([]);
    
    useEffect(() => {
        const fetchStaff = async () => {
            const {data} = await axios.get('/api/staff/')
            setStaff(data);
        }
        fetchStaff();
    }, [])

    // FETCH DATA BRANCH
   const [branch, setBranch] = useState([]);
   useEffect(() => {
    const fetchBranch = async () => {
        const {data} = await axios.get('/api/branch/')
        setBranch(data)
    }
    fetchBranch();
    }, [])

    let countNhanvien = 0;
    for (let i = 0; i < Staff.length; i++){
        if (Staff[i].Branch === userInfo.chinhanh){
            countNhanvien++;
        }
    }
    let countTableOrder = 0;
    for (let i = 0; i < OrderTable.length; i++){
        if (OrderTable[i].chinhanh === userInfo.chinhanh){
            countTableOrder++;
        }
    }

    const [Order, setOrder] = useState([]);
    
    useEffect(() => {
        const fetchOrder = async () => {
            const {data} = await axios.get('/api/orderBranch/')
            setOrder(data);
        }
        fetchOrder();
    }, [])

    let countOrderBranch = 0;
    for (let i = 0; i < Order.length; i++){
        if (Order[i].chinhanh === userInfo.chinhanh){
            countOrderBranch++;
        }
    }
    return (
      <div className="container container__home col-lg-12 col-md-12 col-sm-12 col-12">
        <h1>Danh Mục Quản Lý</h1>
        <div className="container__home--container col-lg-12 col-sm-12 col-md-12 col-12">
          <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4"><Link to={'/order'}>
              <h3>{Products.length}</h3>
              <p>Sản Phẩm</p></Link>
          </div>
          <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
          <Link to={'/catalog'}><h3>{Catalogs.length}</h3>
              <p>Loại Hàng</p></Link>
          </div>
          <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
          <Link to={'/table'}><h3>{countTableOrder}</h3>
              <p>Đặt Bàn</p></Link>
          </div>
          <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
          <Link to={'/staff'}><h3>{countNhanvien}</h3>
              <p>Nhân Viên</p></Link>
          </div>
          <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
          <Link to={'/doanhthu'}>
            <h3>
                {
                    branch.map(branch => {
                        if (branch.name === userInfo.chinhanh){
                            return (
                                <h3>{formatProductPrice(branch.doanhthu)}</h3>
                            )
                        }
                    })
                }
            </h3>
            <p>Doanh Thu</p></Link>
          </div>
          <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
          <Link to={'/manage-order'}>
            <h3>{countOrderBranch}</h3>
            <p>Đơn Hàng</p></Link>
          </div>
        </div>
      </div>
    )
}

export default Home