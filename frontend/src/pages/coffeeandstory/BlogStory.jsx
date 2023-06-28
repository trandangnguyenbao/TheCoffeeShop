import './coffeestorychild.css';

import { useEffect, useState } from 'react';

import { API_BASE_URL } from '../../config';
import { NavLink } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

const BlogStory = () => {
    const [StoryBlog, setStoryBlog] = useState([]);
    useEffect(() => {
        const fetchStory = async () => {
            const {data} = await axios.get(`${API_BASE_URL}/api/pages/story/`)
            setStoryBlog(data)
        }
        fetchStory();
    }, [])
    return (
        <section className="storyhome">
        <div className="container container__storyhome">
            <h1>Chuyện Nhà</h1>
            <div className="container__storyhome--content"><p> The Coffee House sẽ là nơi mọi người xích lại gần nhau, đề cao giá trị kết nối con người và sẻ chia thân tình bên những tách cà phê, ly trà đượm hương, truyền cảm hứng về lối sống hiện đại.</p></div>
            <ul className="story__home--menu">
                <li  className = 'story__home--memu' ><NavLink className = '' to={'/pages/story'}  >Tất Cả</NavLink></li>
                <li  className = 'story__home--memu' ><NavLink className = '' to={'/pages/story/coffeeholic'}   >Coffeeholic</NavLink></li>
                <li  className = 'story__home--memu' ><NavLink className = '' to={'/pages/story/teaholic'}    >TeaHolic</NavLink></li>
                <li  className = 'story__home--memu active' ><NavLink className = '' to={'/pages/story/blog'}   >Blog</NavLink></li>
            </ul>
        </div>
        <div className="container container__storychild col-lg-12 col-md-12 col-sm-12 col-12">
            {
               StoryBlog.map(({type_story, children}, index) => {
                    if (type_story === "Blog"){
                        return (
                            children.map((children, index) => {
                                return (
                                    <ul className="container__storychild--item col-lg-4 col-md-4 col-sm-6 col-12 py-2 px-2" key={index}>
                                        <li className="container__storychild--img col-lg-12 col-md-12 col-sm-12 col-12">
                                            <a href = {children.link} ><img src={children.img} alt="" /></a>
                                        </li>
                                        <li className="container__storychild--title col-lg-12 col-md-12 col-sm-12 col-12">
                                            <NavLink>{children.title}</NavLink>
                                            <span>{children.date}</span>
                                            <p>{children.descript}</p>
                                        </li>
                                    </ul>
                                )
                            })
                        )
                    }
                })
                }
        </div>
        </section>
    )
}

export default BlogStory