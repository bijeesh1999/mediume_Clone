import React from "react";
import randome from "../../src/homeImages.json"
import ResponsiveAppBar from "./header/header";
import "./home.css"




function Home(){
    console.log(randome.header[0]);
    return(
        <>
        <ResponsiveAppBar />
        <div className="wraper">
            <div className="mainImage">
                <img src={randome.header[0].img} alt="headerImg" />
            </div>
            <div className="contents">contents</div>
            <div className="randomContainer">
                <div className="leftContainer" >
                {randome.left.map((img , index)=>(
                <img src={img.image} alt="leftImg" key={index}/>
                ))}
                </div>
                <div className="rightContainer">
                {randome.right.map((right,index)=>(
                    // {console.log(img)}
                    <img src={right.img} alt="rightImg" key={index} />
))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;