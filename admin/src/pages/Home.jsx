import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import formatProductPrice from '../Helper'


const Home = () => {
  const [Products, setProducts] = useState([]);
  var number = 0;
    // const [page, setPage] = useState(1);
    // const [pageSize] = useState(8);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/collections/')
            setProducts(data)
        }
        fetchProducts();
    }, [])

    // GET DATA ORDER
    const [order, setOrder] = useState([]);
    useEffect(() => {
      const fetchOrder = async () => {
          const {data} = await axios.get('/api/order/')
          setOrder(data)
      }
      fetchOrder();
    }, [])

    // GET DATA USER
    const [user, setUser] = useState([]);
    useEffect(() => {
      const fetchUser = async () => {
          const {data} = await axios.get('/api/user')
          setUser(data)
      }
      fetchUser();
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

  // FETCH DATA BRANCH
  const [branch, setBranch] = useState([]);
  useEffect(() => {
   const fetchBranch = async () => {
       const {data} = await axios.get('/api/branch/')
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
            <h3>{formatProductPrice(sumWithInitial)}</h3>
            <p>Doanh Thu</p></Link>
        </div>
        <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
        <Link to={'/catalog'}><h3>{Catalogs.length}</h3>
            <p>Loại Hàng</p></Link>
        </div>
        <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
        <Link to= {'/order'}><h3>{order.length}</h3>
            <p>Đơn Hàng</p></Link>
        </div>
        <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
        <Link to={'/branch'}> <h3>{branch.length}</h3>
            <p>Chi Nhánh</p></Link>
        </div>
        <div className="container__home--container--item col-lg-4 col-sm-4 col-md-4 col-4 pt-4">
        <Link to={'/user'}><h3>{user.length}</h3>
            <p>Người Dùng</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Home