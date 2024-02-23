import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../header/header";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "./blog.css"


function BlogList(){
    const [blogs,setBlogs]=useState([])
    const navigate=useNavigate()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get('http://localhost:2000');
            setBlogs(res.data)// Access the data property
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

    //   console.log(blogs);

    return(
        <>
        <ResponsiveAppBar />
        <div className="blogContainer">
            <div className="blogList" >
        {blogs?.map((data , index)=>(
                <div className="blogs"key={index} onClick={()=>navigate(`/singleBlog/${data._id}`)} >
                <div className="blogTitleHeader">
                    {data.blog.map((item)=>{
                        if(item.type === "image"){
                            const img=item.image
                            console.log(img);
                            <div className="img"><img src={img} alt="img" /></div>
                            }
                        })}
                <h3 className="title">
                    {data.title}
                </h3>
                </div>
                <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus molestiae blanditiis! Accusamus alias fugiat totam soluta. Nesciunt recusandae doloremque quasi explicabo eligendi qui, et quaerat! Adipisci inventore architecto obcaecati.
                </p>
                <p className="date">
                    created at : {data.createdAt}
                </p>
            </div>
        ))}
        </div>
        </div>
        </>
    )
}

export default BlogList