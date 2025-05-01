import React from 'react'
import { useEffect,useState } from 'react'
const Credopertion = () => {

    const[entries,setEntries]=useState([]);
    const[form,setForm]=useState({});
    const[editId,setEditId]=useState(null);


    const fetchData = async()=>{
       
    }
  return (
    <div>
      <form>
        <p>
            <label htmlFor="name">Product Name:</label>
            <input type="text" placeholder='enter Product Name'/>
        </p>
        <p>
            <label htmlFor="category">Product Category :</label>
            <input type="text" placeholder='Enter product category' />
        </p>
        <p>
            <label htmlFor="price">Product Price :</label>
            <input type="text" placeholder='Enter Price' />
        </p>
        <button>
            submit
        </button>
      </form>
    </div>
  )
}

export default Credopertion
