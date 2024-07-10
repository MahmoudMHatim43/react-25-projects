import React,{useState} from 'react'
import {Data} from './Data.js'
import './index.css'

export function Accordian() {
  const [selected,setSelected] = useState(null)
  const [enableMulti,setEnableMulti] = useState(false)
  const [multi,setMulti] = useState([])

  return (
    <div className='container'>
      <button onClick={()=>setEnableMulti(!enableMulti)} style={enableMulti?{backgroundColor:'orange'}:{backgroundColor:'white'}}>Multi Select Mode</button>
      {Data&&Data.length>0?
      Data.map(item=><DataEl 
        key={item.id} 
        item={item} 
        setSelected={setSelected} 
        selected={selected} 
        setMulti={setMulti} 
        setEnableMulti={setEnableMulti} 
        enableMulti={enableMulti} multi={multi}/>)
      :<h1>Data Not Found!</h1>}
    </div>
  )
}

function DataEl({item,setSelected,selected,setMulti,setEnableMulti,multi,enableMulti}){
  // handle click functions
  function handleSingle(currId) {
    if (currId == selected) { return setSelected(null) }
    setSelected(currId)
  }

 function handleMulti(currid) {
  let arr = [...multi] // [...multi] will give us a new array of multi
  const found = arr.indexOf(currid)
  found == -1 ? arr.push(currid):arr.splice(found,1)
  setMulti(arr)
 }

  return (
    <div className='acc-container' onClick={()=> enableMulti ? handleMulti(item.id): handleSingle(item.id)}>
      <h2>{item.title}</h2>
      {selected === item.id || multi.indexOf(item.id) !== -1 ? <p>{item.content}</p> : null}
      <button className='drop-btn'>+/-</button>
    </div>
  )
}