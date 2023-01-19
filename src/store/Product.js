import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token")
 const httpAxios = axios.create({
    baseURL: "https://task.samid.uz/v1",
    headers: { Authorization: `Bearer ${token}` },
  });

export const getProduct = createAsyncThunk("getProduct" , async ()=>{
    return httpAxios.get("/task")
    .then(req => req)
    .catch(err => console.log(err))
})

export const addProduct = createAsyncThunk("deleteProduct" , async (data)=>{
    console.log(`data`, data);
    return httpAxios.post(`/task` , data)
    .then(req => req)
    .catch(err => console.log(`err`, err))
})

export const deleteProduct = createAsyncThunk("deleteProduct" , async (id)=>{
    return httpAxios.delete(`/task/${id}`)
    .then(req => req)
    .catch(err => console.log(`err`, err))
})

const productSlice = createSlice({
    name: "product",
    initialState: {product: null, status: ""},
    extraReducers: {
        [getProduct.pending] : (state , action)=>{
            state.status = "pending"
        },
        [getProduct.fulfilled] : (state , action ) =>{
            console.log(`action.payload`, action.payload);
            state.status = action.meta.requestStatus
            state.product = action.payload
        },
        [getProduct.rejected] : (state , action ) => {
            state.status = "rejected"
        }
    }
})

export default productSlice.reducer