import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
import { useState, useMemo } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import formatProductPrice from '../../Helper/index.js'
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Product = () => {
    const [Products, setProducts] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    // const [page, setPage] = useState(1);
    // const [pageSize] = useState(8);
    const history = useNavigate();
    
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/collections/')
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
        console.log(id)
        let result = await fetch(`/api/collections/${id}`, {
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
            <h1 className="container__item">Danh S??ch S???n Ph???m</h1>
            <ul className="container__item">
                <li className="container__item">
                    <Link to = {'/add-product'}>Th??m S???n Ph???m</Link>
                </li>
                <li className="container__item">
                    <form action="" onSubmit={handleSearch}>
                        <input type="text" placeholder='T??m ki???m s???n ph???m' value={value} onChange={(e) => handleSearch(e)} />
                        <input type="submit" value='T??m ki???m' /></form>
                </li>
            </ul>
            <table className='product'>
                <tr>
                    <th>M?? S???n Ph???m</th>
                    <th>T??n S???n Ph???m</th>
                    <th>H??nh ???nh</th>
                    <th>Gi??</th>
                    <th>Lo???i S???n Ph???m</th>
                    <th>M?? T???</th>
                    <th>Ch???c N??ng</th>
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
                                    <td>
                                        <Link className = "update__item" to={`/product/${product._id}`}>S???a</Link>
                                        <Link onClick={() => deleteProduct(product._id)} className = 'delete__item'>X??a</Link>
                                    </td>
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