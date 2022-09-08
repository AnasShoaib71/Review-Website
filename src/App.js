import React, { useState } from 'react'
import {MdOutlineArrowBackIosNew} from "react-icons/md"
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import DEVELOPER from "./developerr.jpg"
import DESIGNER from "./designer.jpg"
import BOSS from "./boss.jpg"
import INTERN from "./intern.jpg"

let obj=[
  {
    img: DEVELOPER,
    name:"Susan Smith",
    job:"WEB DEVELOPER",
    info:" I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
  },
  {
    img:DESIGNER,
    name:"Anna Johnson",
    job:"WEB DESIGNER",
    info:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
  },

  {
    img:INTERN,
    name:"Peter Jones",
    job:"INTERN",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag"
  },
  {
    img:BOSS,
    name:"Bill Anderson",
    job:"THE BOSS",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
  },

]



export default function App() {
  let [index,setindex]=useState(1)
  let [state,setstate]=useState(obj[0])
  let [revirse, setRevirse] =useState(obj.length-1)
  let [randomNum, setRandomNum] = useState(0)
  
function handle()
{
  if(index<obj.length)
  {
    setstate(obj[index]);
    setindex(index+=1)
  }
  else
  {
    setindex(1)
setstate(obj[0])
  }
  
}
function handlebtn()
{
  if(revirse>=0)
  {
    setstate(obj[revirse]);
    setRevirse(revirse-=1)
  }
  else
  {
    setRevirse(obj.length-1)
setstate(obj[obj.length-1])
  }
}

function random(){
  setRandomNum(Math.floor(Math.random()*obj.length))
    setstate(obj[randomNum]);
    console.log(randomNum)
  }
  
  return (
    <div className='contanier'>
      <br />
      <br />      
      <div className='title'><p>Over Reviews</p>
      <hr/>
      </div>
      <br />
      <br />
      <div className='card'>
      <div className='data'>     
      <div className='img-background'><img src={state&&state.img} /></div>
      <h2>{state&&state.name}</h2>
      <h3>{state&&state.job}</h3>
      <p>{state&&state.info}</p>
      <div className='random-btn'>
      <div className='button'>
        <button onClick={handlebtn}><MdOutlineArrowBackIosNew /></button>
      <button onClick={handle}><MdOutlineArrowForwardIos /></button>
      </div>
       <button className='random' onClick={random}>Surprise Me</button>
      </div>
      </div>
      </div>
   </div> 
  )
}
