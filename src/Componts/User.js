import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const User = () => {
    const {id}=useParams() 
    const [data1,SetData]= useState()

    useEffect(()=>{
        console.log('UseEffect Is Runnig');
        const getData = async ()=>{
            const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data =await res.json()
            if(data){
                SetData(data)
            }
         }
        getData()
        return () =>{
            console.log('clan up');
            getData()
        }

    },[id])
    console.log(id);


  return (
    <div>UserPage
        {data1?(<div>
          <h2>{data1.title}</h2>
          <p>{data1.body}</p>
        </div>):null}
        <Link to ='/Contact'>Back</Link>
    </div>
  )
}

export default User