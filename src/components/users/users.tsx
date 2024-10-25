import React, { useEffect, useState } from "react";
import { ProfileApi } from "../../services/ProfileApi";
import './users.styles.css';

type userData = {
  avatar: string,
  creationAt: string,
  email: string,
  id: number,
  name : string,
  password: string,
  role: string,
  updatedAt: string
}

export const Users = () => {
  const [data, setData] = useState<userData[]>([]);

  useEffect(()=>{
    fetchUser()
  },[])

  const  fetchUser = async() =>{
    const res = await ProfileApi();
    setData(res);
  }

  const filterList = data.slice(0,3); 

    return (
    <div className="container">{filterList.map((el)=>(
      <div key={el.id} >
      <div><img src={el.avatar} alt={el.name}/>
      <ol >Name: {el.name}</ol>
      <ol className="email">Email: {el.email}</ol></div>
      </div>
    ))}</div>)
}