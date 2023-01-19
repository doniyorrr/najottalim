import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Login as login } from "../store/Auth"

const Login = () => {
    const [data , setData ] = useState({
        username: "",
        password: ""
    })
    const dispatch = useDispatch()
    const handleChange = (e) =>{
        const newData = {...data }
        newData[e.target.id] = e.target.value
        setData(newData)
    }
  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="username"
          onChange={(e)=> handleChange(e)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="password"
          placeholder="password"
          onChange={(e)=> handleChange(e)}
        />
      </div>
      <button className="btn btn-success" onClick={()=>{dispatch(login(data))}}>Kirish</button>
    </>
  );
};

export default Login;
