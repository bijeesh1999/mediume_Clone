import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import TitleIcon from '@mui/icons-material/Title';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import "./blogForm.css"


const actions = [
  { icon: <TitleIcon />, name: 'title'},
  { icon: <PhotoLibraryIcon />, name: 'image' },
  { icon: <OndemandVideoIcon />, name: 'video' },
  { icon: <CodeIcon />, name: 'embed' },
  { icon: <DataObjectIcon />, name: 'code'},
  { icon: <ChromeReaderModeIcon />, name: 'content'},


];

export default function BasicSpeedDial() {
  const navigate=useNavigate();
  const [submit , setSubmit]=useState(false)
  const userid=localStorage.getItem("userId")
  const [form,setForm]=useState({
    title:"",
    type:[],
    userId:""
  })
  const handleInput = (inputType) => {
    const newTypeArray = [...form.type];
    newTypeArray.push({ type: inputType });
    setForm(prevForm => ({
      ...prevForm,
      type: newTypeArray
    }));
    setSubmit(true)
  };

  const handleChange = (e , index) =>{
    console.log(form.type[index]);
    if(e.target.name){
      const newArr=[...form.type]
      const helloo=newArr[index].value=e.target.value;
      setForm(prevForm => ({
        ...prevForm,
        type: newArr
      }));
    }

  }

  const handleSubmit= async ()=>{
const res=await axios.post("http://localhost:2000",form)
if(res.OK){
  navigate("/BlogList")
}
  }

  console.log(form);

  return (
    <>
    <Box sx={{ height: 100, transform: 'translateX(0px)', flexGrow: 1 ,position:'fixed', top:"5rem",left:"1rem" }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, left: 20 }}
        icon={<SpeedDialIcon />}
        direction="right"
        className='fields'
      >
        {actions.map((action , index) => (
          <SpeedDialAction
            key={index}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{ display: 'flex', flexDirection: 'column' }}
            className="custom-speed-dial-action"
            onClick={()=>handleInput(action.name)}
          />
        ))}
      </SpeedDial>
    </Box>
    <form className='Form'>
      <input type='text' name='title' className='Main_title' placeholder='enter title...' onChange={(e)=>setForm({...form,title:e.target.value,userId:userid})}/>
    {form.type?.map((input, index) => {
      if(input.type === 'title'){
          return(
        <div className='contentTitleBlock' key={index}>
           <input key={index} type="text" name='text' placeholder="content Title" className='title'onChange={(e) =>handleChange(e , index)}/>
        </div>
          )
      }else if(input.type === 'image'){
          return(
        <div className='inputBlock' key={index}>
          <input type="text" name="image"   alt="Submit" key={index} placeholder="select image url and view it" onChange={(e)=>handleChange(e , index)} />
          <div className='imgPrev'><img src={input?.value} alt='image' style={{width:"600px", height:"350px" , objectFit:'cover'}} key={index} /></div>
        </div>)
      }else if(input.type === 'video') {
          return(
        <div className='inputBlock' key={index}>
           <input key={index} type="text" name='video' placeholder="fill video url to view video" onChange={(e) =>handleChange(e , index)}/>
           <div className='videoPrev'>
           <CardMedia component="iframe" height={'100%'} src={input?.value} alt={input.value} autoPlay controls onError={(e) => console.error("Error loading video", e)} />
           </div>
        </div>
          )
      }else if (input.type === 'audio') {
          return(
        <div className='inputBlock' key={index}>
           <input key={index} type="text" name='audio' placeholder="fill the audio url to listen" onChange={(e) =>handleChange(e , index)}/>
           <div className='audioPrev'>preview</div>
        </div>)
      } else if(input.type === 'embed') {
          return(
        <div className='urlBlock' key={index}>
          <input key={index} type="url" placeholder="enter url here ..." name='embed' onChange={(e) =>handleChange(e , index)}/>
        </div>
          ) 
      }else if(input.type === 'code'){
          return (
        <div className='inputBlock' key={index}>
          <textarea key={index} type="text" placeholder="enter code here ..." name='code' onChange={(e) =>handleChange(e , index)}/>
        </div>
          )
      }else if(input.type === 'content'){
          return(
        <div className='inputBlock' key={index}>
           <textarea key={index} type="text" placeholder="enter content here ..." name='content' onChange={(e) =>handleChange(e , index)}/>
        </div>
          )
      }
    })}
    </form>
    {submit ? <div className='button' style={{width:"100%",display:"flex",justifyContent:"end" , padding:"0 2rem"}}>
    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div> : null}
    </>
  );
}
