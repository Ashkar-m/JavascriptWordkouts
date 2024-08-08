import React,{useState} from 'react';
import Child from './Child';

export default function Parent() {

    const [value,setValue]=useState('')


    const fromParent=(data)=>{

        setValue(data)
    }
    console.log(value);
  return (
    <div>

        <p>{value}</p>
        <Child toParent={fromParent}/> 
      
    </div>
  )
}
