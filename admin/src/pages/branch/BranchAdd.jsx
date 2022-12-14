import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const BranchAdd = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    // const [path, setPath] = useState('');
    const [countryName, setCountryName] = useState('');
    const [provinceName, setProvinceName] = useState('');
    const [map, setMap] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState('');
    const [ImageSlug, setImageSlug] = useState('')
    // FETCH DATA COUNTRIES
   const [countries, setCountries] = useState([]);
   useEffect(() => {
    const fetchCountry = async () => {
        const {data} = await axios.get('/api/country/')
        setCountries(data)
    }
    fetchCountry();
    }, [])
    // FETCH DATA PROVINCE
   const [province, setProvince] = useState([]);
   useEffect(() => {
    const fetchProvince = async () => {
        const {data} = await axios.get('/api/province/')
        setProvince(data)
    }
    fetchProvince();
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

    const handleImage = (e) => {
        var imageSlug = e.target.value.slice(12);
        // console.log(imageSlug)
        setImageSlug(imageSlug)
        var imageValue = document.querySelector("input[name = 'image']").value;
        // console.log(imageValue);
        setImage(imageValue);
        // console.log(image)
    }
    
    const handleSubmit =  ()=>{
        const path = name.replace(/ /g,'-');
        const data = {
            name: name,
            path: path, 
            Country_name: countryName,
            Province_name: provinceName, 
            map: map, 
            address: address, 
            image: image
        }

        axios.post('/api/branch/',data).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert('Th??m Chi Nh??nh Th??nh C??ng');
          history("/branch")
    }

  return (
    <div className="container container__add">
        <div className="container__addcontains">
        <h1>Th??m Chi Nh??nh</h1>
        <form onSubmit={handleSubmit}>
            <div className="container__add--item">
                <p>T??n Chi Nh??nh</p>
                <input type="text" name="" id="" placeholder='Nh???p T??n Chi Nh??nh' onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>T??n Th??nh Ph???</p>
                <select name="" id="" onChange={e=>setCountryName(e.target.value)}>
                    {
                        countries.map((countries, index) => {
                            return (
                                <option value={countries.name}>{countries.name}</option>
                            )
                    })
                }
                </select>
            </div>
            <div className="container__add--item">
                <p>T??n Qu???n/Huy???n</p>
                <select name="" id="" onChange={e=>setProvinceName(e.target.value)}>
                    {
                        province.map((province, index) => {
                            if(province.Country_name === countryName){
                                return (
                                    <option value={province.name} key= {province.province_id}>{province.name}</option>
                                )
                            }
                    })
                }
                </select>
            </div>
            <div className="container__add--item">
                <p>?????a Ch???</p>
                <input type="text" name="" id=""  onChange={e=>setAddress(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>S?? ????? ???????ng ??i</p>
                <input type="text" name="" id=""  onChange={e=>setMap(e.target.value)}/>
            </div>
            <div className="container__add--item">
                <p>H??nh ???nh</p>
                <input type={'file'} name="" id="" onChange={(e) => handleImage(e) }/>
            </div>
            <div className="container__add--item">
                <p>H??nh ???nh</p>
                <input type="text" name="image" id="" value={`../../images/chinhanh/${ImageSlug}`}/>
            </div>
            <button type='submit'>Th??m Chi Nh??nh</button>
        </form>
        </div>
    </div>
  )
}

export default BranchAdd