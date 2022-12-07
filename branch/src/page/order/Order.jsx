import React from "react"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import formatProductPrice from '../../Helper/index.js'
import { Link } from 'react-router-dom'
import './order.css'
import { useSelector, useDispatch } from 'react-redux'
import {AiOutlineDelete} from 'react-icons/ai'
const Order = () => {
    const history = useNavigate();
    const [Catalogs, setCaTaLogs] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    useEffect(() => {
        if (!userInfo) {
            history("/account/login")
        }
    }, [history])
    const [catalogParent, setCatalogParent] = useState("Cà Phê");
    const [catalog, setCatalog]= useState("Cà Phê Việt Nam");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        const fetchCatalogs = async() => {
            const {data} = await axios.get('/api/catalog/')
            setCaTaLogs(data)
        }
        fetchCatalogs();
    }, [])

    const [Products, setProducts] = useState([]);
    // const [page, setPage] = useState(1);
    // const [pageSize] = useState(8);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/collections/')
            setProducts(data);
        }
        fetchProducts();
    }, [])

    const cart = useSelector((state) => state);
    const dispatch = useDispatch();

    const tongtien = cart.map((product) => {
        return product.cost*product.quantity
     })
     const initialValue = 0;
     const sumWithInitial = tongtien.reduce(
       (previousValue, currentValue) => previousValue + currentValue,
       initialValue
     );

    const soluong = cart.map((product) => {
        return product.quantity
    })

    const soluonghang = 0;
   const Tongsoluong = soluong.reduce(
     (previousValue, currentValue) => previousValue + currentValue,
     soluonghang
   );

   // FETCH DATA BRANCH
   const [branch, setBranch] = useState([]);
   useEffect(() => {
    const fetchBranch = async () => {
        const {data} = await axios.get('/api/branch/')
        setBranch(data)
    }
    fetchBranch();
    }, [])

    // const idBranch = branch.map((branch) => {
    //     if (branch.name == userInfo.chinhanh){
    //         return branch._id
    //     }
    // })

    // const id = idBranch[0];

    // const DoanhThu = branch.map((branch) => {
    //     if (branch.name == userInfo.chinhanh) {
    //         return branch.doanhthu
    //     }
    // })
    // const DoanhThuBranch = DoanhThu[0];
    const [order, setOrder] = useState([]);
    useEffect(() => {
          const fetchOrder = async () => {
              const {data} = await axios.get('/api/orderBranch/')
              setOrder(data)
          }
          fetchOrder();
      }, [])
    let idOrder = order.map((order) => {
        return order.id_order;
    })

    const id_order = idOrder[order.length - 1] + 1;

    let id = 0;
    for (let i = 0; i < branch.length; i++){
        if (branch[i].name === userInfo.chinhanh){
            // setNameUser(user[i].phone)
            id = branch[i]._id
        }
    }
    // const idBranch = branch.map((branch) => {
    //     if (branch.name == userInfo.chinhanh){
    //         return branch._id
    //     }
    // })

    // const id = idBranch[0];

    let DoanhThuBranch = 0;
    for (let i = 0; i < branch.length; i++){
        if (branch[i].name === userInfo.chinhanh){
            // setNameUser(user[i].phone)
            DoanhThuBranch = branch[i].doanhthu
        }
    }
    let list = [{}];
    let product = {
        title: "", 
        cost: 0,
        soluong: 0,
        tongtien: 0
    }
    for (let i = 0; i < cart.length; i++){
        product = {
            title: cart[i].title,
            cost: cart[i].cost,
            soluong: cart[i].quantity,
            tongtien: cart[i].cost*cart[i].quantity
        }
        list = list.concat(product);
    }
    const children = list.slice(1)
    // console.log(children);
    const handleSubmit =  ()=>{
        const chinhanh = userInfo.chinhanh;
        const cost = sumWithInitial;
        const Soluong = Tongsoluong;
        const doanhthu = DoanhThuBranch + sumWithInitial;
        const data = {
            id_order: id_order,
            tongtien: cost,
            soluong: Soluong,
            chinhanh: chinhanh, 
            phone: phone
        }

        const datas = {
            doanhthu: doanhthu
        }

        const dulieu = {
            id_order: id_order,
            children: children
        }

    // Thêm Đơn Hàng
    axios.post('/api/orderBranch/',data).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      history("/order")

    // Thêm Danh Sách Sản Phẩm Vào Chi Tiết Đơn Hàng
    axios.post('/api/orderBranchDetail/',dulieu).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Cập Nhật Chi Nhánh Sau Khi Mua
    axios.put(`/api/branch/update/${id}`,datas).then(function (response) {
        console.log(response);
        // console.log(id)
      })
      .catch(function (error) {
        console.log(error);
        history("/")
      });
}

    return (
    <div className="container container__order">
            <h1 className="container__item">Danh Sách Sản Phẩm</h1>
            <ul className="container__item">
                <li className="container__item">
                    <select name="" id="" onChange={e => setCatalogParent(e.target.value)} >
                        {
                            Catalogs.map((catalog) => {
                                return (
                                    <option value={catalog.name}>{catalog.name}</option>
                                )
                            })
                        }
                    </select>
                </li>
                <li className="container__item">
                    <select name="" id="" onChange={e => setCatalog(e.target.value)}>
                        {
                            Catalogs.map(({children}) => {
                                return (
                                    children?.map((catalogs) => {
                                        if (catalogs.TypeCatalogParent == catalogParent){
                                            return (
                                                <option value={catalogs.name}>{catalogs.name}</option>
                                            )
                                        }
                                    })
                                )
                            })
                        }
                    </select>
                </li>
            </ul>
            <div className="container__product col-lg-12">
                <div className="container__product--item col-lg-7">
                <table className='order'>
                <tr>
                    <th>STT</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Giá</th>
                    <th>Đặt Món</th>
                </tr>
                
                    {
                         Products.map((product, index) => {
                            product.quantity = 1
                            if (product.catalog === catalog && product.catalogParent === catalogParent){
                                return (
                                    <tr>
                                        <td><p>{index+1}</p></td>
                                        <td><p>{product.title}</p></td>
                                        <td><img src={product.img} alt="" /></td>
                                        <td><p>{formatProductPrice(product.cost)}</p></td>
                                        <td><button className="add" onClick={() => dispatch({type: "ADD", payload : product})}>Thêm Món</button></td>
                                        {/* <td><button onClick={() => dispatch({type: "ADD", payload : product})}>Thêm Món</button></td> */}
                                    </tr>
                                )
                            }
                        })
                    }
            </table>
                </div>
                <div className="container__product--order col-lg-5">
                    <h5>Hóa Đơn Khách Hàng</h5>
                    <form onSubmit={handleSubmit}>
                        {
                            cart.map((product) => {
                                    return (
                                        <div className="container__order--left">
                                            <span onClick={() => dispatch({type: "REMOVE", payload: product})}><AiOutlineDelete /></span>
                                            <input type="text" name="" value={product.title}/>
                                            <input type="Number" name="" value={(product.cost)}/>
                                            <div className="action">
                                                <span
                                                    onClick={() => {
                                                        if (product.quantity > 1) {
                                                            dispatch({ type: "DECREASE", payload: product });
                                                        } else {
                                                            dispatch({ type: "REMOVE", payload: product });
                                                        }
                                                    }}
                                                    >
                                                    -
                                                </span>   
                                                <input type="text" className="soluong" value={product.quantity}/>    
                                                <span onClick={() => dispatch({type: "INCREASE", payload: product})}>+</span>  
                                            </div>
                                            <input type="number" value={product.cost*product.quantity} />
                                        </div>
                                    )
                            })
                        }
                        <hr />
                        <div className="container__product--total">
                            <div>
                                <p>Tổng Tiền:</p>
                                <h5>{formatProductPrice(sumWithInitial)}</h5>
                            </div>
                            <div>
                                <p>Tổng Số Lượng:</p>
                                <h5>{Tongsoluong}</h5>
                            </div>
                        </div>
                        <hr />
                        <div className="dathang">
                            <input type="text" placeholder="Nhập số Điện Thoại Khách Hàng" onChange={e => setPhone(e.target.value)} />
                            <button className="dathang" type="submit">Đặt Hàng</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order