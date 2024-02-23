import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import "./blog.css";

function SingleBlog() {
  const [data, setData] = useState();
  const { id } = useParams();

  const getSingleBlog = async () => {
    const res = await axios.get(`http://localhost:2000/${id}`);
    setData(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getSingleBlog();
  }, [id]);

  return (
    <div className="singleDataContainer">
      <h1 className="title">{data?.title}</h1>
      {data?.blog?.map((input, index) => {
        if (input.type === "title") {
          <h2>{input?.value}</h2>;
        } else if (input.type === "image") {
          return (
            <div className="inputBlock" key={index}>
              <div className="imgPrev">
                <img
                  src={input?.value}
                  alt="image"
                  key={index}
                />
              </div>
            </div>
          );
        } else if (input.type === "video") {
          return (
            <div className="inputBlock" key={index}>
              <div className="videoPrev">
                <CardMedia
                  component="iframe"
                  height={"100%"}
                  src={input.value}
                  alt={input.value}
                  autoPlay
                  controls
                  onError={(e) => console.error("Error loading video", e)}
                />
              </div>
            </div>
          );
        } else if (input.type === "audio") {
          return (
            <div className="inputBlock" key={index}>
              <div className="audioPrev">
                <audio controls>
                  <source src={input.value} type="audio/ogg" />
                  <source src={input.value} type="audio/mpeg" />
                </audio>
              </div>
            </div>
          );
        } else if (input.type === "embed") {
          return (
            <div className="urlBlock" key={index}>
              <a>{input?.value}</a>
            </div>
          );
        } else if (input.type === "code") {
          return (
            <div className="inputBlock" key={index}>
              <p>{input?.value}</p>
            </div>
          );
        } else if (input.type === "content") {
          return (
            <div className="inputBlock" key={index}>
              <p>{input.value}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SingleBlog;
