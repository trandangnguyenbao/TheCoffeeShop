import React from 'react'
import './manageorder.css'
import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import formatProductPrice from '../../Helper/index.js'
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
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
            const {data} = await axios.get('/api/orderBranch/')
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
        let result = await fetch(`/api/orderBranch/${id}`, {
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
            <h1 className="container__item">Danh S??ch ????n H??ng</h1>
            <ul className="container__item">
                <li className="container__item">
                    <form action="" onSubmit={handleSearch}>
                        <input type="text" placeholder='T??m ki???m ????n h??ng' value={value} onChange={(e) => handleSearch(e)} />
                        <input type="submit" value='T??m ki???m' /></form>
                </li>
            </ul>
            <table className='orderBranch'>
                <tr>
                    <th>STT</th>
                    <th>S??? ??i???n Tho???i</th>
                    <th>S??? L?????ng</th>
                    <th>T???ng Ti???n</th>
                    <th>Chi Ti???t</th>
                    <th>Ch???c N??ng</th>
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
                                        <td><Link to = {`/manage-order/${order.id_order}`}>Xem chi Ti???t</Link></td>
                                        <td>
                                            <Link onClick={() => deleteOrder(order._id)} className = 'delete__item'>X??a</Link>
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