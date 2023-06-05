import '../catalog/catalog.css'
import './branch.css'

import { Link, useParams } from 'react-router-dom'

import { API_BASE_URL } from '../../config'
import React from 'react'
import {Skeleton} from 'antd'
import axios from 'axios'
import formatProductPrice from '../../Helper'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const BranchDetail = ({match}) => {
    const {path} = useParams(); 

    // FETCH DATA COUNTRIES
   const [countries, setCountries] = useState([]);
   useEffect(() => {
    const fetchCountry = async () => {
        const {data} = await axios.get(`${API_BASE_URL}/api/country/`)
        setCountries(data)
    }
    fetchCountry();
    }, [])
    // FETCH DATA PROVINCE
   const [province, setProvince] = useState([]);
   useEffect(() => {
    const fetchProvince = async () => {
        const {data} = await axios.get(`${API_BASE_URL}/api/province/`)
        setProvince(data)
    }
    fetchProvince();
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

    return (
        <div className="container container__type">
            <h1 className="container__item">Chi Tiết Chi Nhánh</h1>
            <ul className="container__item">
                <li className="container__item">
                    <Link to = {'/add-branch'}>Thêm chi Nhánh</Link>
                </li>
                <li className="container__item">
                    <form action="">
                    <input type="text" placeholder='Tìm kiếm chi nhánh' />
                    <input type="submit" value='Tìm kiếm' /></form>
                </li>
            </ul>
            <table className='branchDetail'>
                <tr>
                    <th>Mã Chi Nhánh</th>
                    <th>Tên chi Nhánh</th>
                    <th>Hình Ảnh</th>
                    <th>Nhân Viên</th>
                    <th>Doanh Thu</th>
                </tr>
                <tfoot>{
                    (branch.length > 0) ? (
                        branch.map((branchs) => {
                            if (branchs.path === path){
                                return (
                                    <tr>
                                        <td><p>{branchs.Branch_id}</p></td>
                                        <td><p>{branchs.name}</p></td>
                                        <td><img src={branchs.image} alt="" /></td>
                                        <td><p>{branchs.staff}</p></td>
                                        <td><p>{formatProductPrice(branchs.doanhthu)}</p></td>
                                    </tr>
                                )
                            }
                            
                        })
                    ) : (
                        <tr><td colSpan={7}><Skeleton 
                        paragraph={{
                            rows: 6,
                    }}/></td></tr>
                    )
                }</tfoot>
            </table>
        </div>
      )
}

export default BranchDetail