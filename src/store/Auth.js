import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const httpAxios = axios.create({
  baseURL: "https://task.samid.uz/v1/",
//   headers: { Authorization: `bearer ${token}` },
});

export const Login = createAsyncThunk("Login", async (data) => {
    return httpAxios.post("user/sign-in" , data)
    .then(req => req)
    .catch(err => console.log(err))
});

const loginSlice = createSlice({
    name: "login",
    initialState: {user: {} , status: ""},
    extraReducers: {
        [Login.pending] : (state , action)=>{
            state.status = "pending"
        },
        [Login.fulfilled] : (state , action ) =>{
            state.status = "success"
            console.log(`action`, action);
            state.user = action.payload
            localStorage.setItem("token" , action.payload.data.data.token)
            window.location.href = window.location.origin
        },
        [Login.rejected] : (state , action ) => {
            state.status = "rejected"
        }
    }
})

export default loginSlice.reducer