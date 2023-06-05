import './teahome.css'

import {Link, NavLink} from 'react-router-dom'
import { useEffect, useState } from 'react'

import { API_BASE_URL } from '../../config'
import { AiTwotoneHeart } from 'react-icons/ai'
import {BsFillBagFill} from 'react-icons/bs'
import React from 'react'
import axios from 'axios'
import formatProductPrice from '../../Helper'

const TeaHome = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`${API_BASE_URL}/api/collections/`)
            setProducts(data)
        }
        fetchProducts();
    }, [])
  return (
    <div className="container container__producthome">
        <div className="container__producthome--title">
        <div className="container__producthome--item col-lg-12 col-md-12 col-sm-12 col-12 row">
        <h1 className="container__producthome--title">Trà Tại Nhà</h1>
            {
                Products.map((product,index) => {
                    if(product.catalog == 'Trà Tại Nhà'){
                        return (
                            <div className="container__producthome--child col-lg-3 col-md-4 col-sm-6 col-6  pt-3 ">
                                <Link to = {`/product/${product.path_name}`}><img src={product.img} alt="" className="container__producthome--item" />
                                    <ul className='producthome__child-icon'>
                                        <li className="producthome__child-icon">
                                            <i><AiTwotoneHeart/></i>
                                        </li>
                                        <li className="producthome__child-icon pt-3 ">
                                            <i><BsFillBagFill /></i>
                                        </li>
                                    </ul>
                                </Link> 
                                <p className="container__producthome--title">{product.title}</p>
                                <span className="container__producthome--cost">{formatProductPrice(product.cost)}</span>
                            </div>
                        )
                    }
                })
            }
            </div>
        </div>
    </div>
  )
}

export default TeaHome