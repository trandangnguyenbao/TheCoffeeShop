import './home.css'

import { API_BASE_URL } from '../config'
import { Link } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'
import { Spin } from 'antd'
import axios from 'axios'
import formatProductPrice from '../Helper'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  const [Products, setProducts] = useState([]);
  var number = 0;
    // const [page, setPage] = useState(1);
    // const [pageSize] = useState(8);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`${API_BASE_URL}/api/collections/`)
            setProducts(data)
        }
        fetchProducts();
    }, [])

    // GET DATA ORDER
    const [order, setOrder] = useState([]);
    useEffect(() => {
      const fetchOrder = async () => {
          const {data} = await axios.get(`${API_BASE_URL}/api/order/`)
          setOrder(data)
      }
      fetchOrder();
    }, [])

    // GET DATA USER
    const [user, setUser] = useState([]);
    useEffect(() => {
      const fetchUser = async () => {
          const {data} = await axios.get(`${API_BASE_URL}/api/user`)
          setUser(data)
      }
      fetchUser();
  }, [])

  // GET DATA CATALOG
  const [Catalogs, setCaTaLogs] = useState([]);
    useEffect(() => {
        const fetchCatalogs = async() => {
            const {data} = await axios.get(`${API_BASE_URL}/api/cataloges/`)
            setCaTaLogs(data)
        }
        fetchCatalogs();
    }, [])

  // FETCH DATA BRANCH
  const [branch, setBranch] = useState([]);
  useEffect(() => {
   const fetchBranch = async () => {
       const {data} = await axios.get(`${API_BASE_URL}/api/branch/`)
       setBranch(data)
   }
   fetchBranch();
   }, [])

   const doanhthu = branch.map((branch) => {
      return branch.doanhthu
   })
   const initialValue = 0;
   const sumWithInitial = doanhthu.reduce(
     (previousValue, currentValue) => previousValue + currentValue,
     initialValue
   );

  return (
    <div className="container container__home col-lg-12 col-md-12 col-sm-12 col-12">
      <h1>Danh Mục Quản Lý</h1>
      <div className="container__home--container col-lg-12 col-sm-12 col-md-12 col-12">
        <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4"><Link to={'/product'}>
            {/* {
              Products.map((product, index) => {
                  return (
                    <h3>{product.count()}</h3>  
                  )
              })
            } */}
            <h3>{Products.length}</h3>
            <p>Sản Phẩm</p></Link>
        </div>
        <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
        <Link to = {'/branch/doanhthu'}>
            <h3>{(sumWithInitial) ? formatProductPrice(sumWithInitial) : (<Spin indicator={antIcon} />)}</h3>
            <p>Doanh Thu</p></Link>
        </div>
        <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
        <Link to={'/catalog'}><h3>{(Catalogs.length > 0) ? (Catalogs.length) : (<Spin indicator={antIcon} />)}</h3>
            <p>Loại Hàng</p></Link>
        </div>
        <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
        <Link to= {'/order'}><h3>{(order.length > 0) ? (order.length) : (<Spin indicator={antIcon} />)}</h3>
            <p>Đơn Hàng</p></Link>
        </div>
        <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
        <Link to={'/branch'}> <h3>{(branch.length > 0) ? (branch.length) : (<Spin indicator={antIcon} />)}</h3>
            <p>Chi Nhánh</p></Link>
        </div>
        <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
        <Link to={'/user'}><h3>{(user.length > 0) ? (user.length) : (<Spin indicator={antIcon} />)}</h3>
            <p>Người Dùng</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Home