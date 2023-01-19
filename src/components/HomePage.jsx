import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, getProduct } from "../store/Product";

const HomePage = () => {
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div>
      <h2>hello world</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
         {
          product?.data && 
          product.data?.data?.map((item , index ) => {
            console.log(`item`, item);
            return(
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td><Link to="/form"><button class="btn btn-success" type="">add</button></Link></td>
                <td><button onClick={()=> dispatch(deleteProduct(item.id))} class="btn btn-danger" type="">delete</button></td>
              </tr>
            )
          })
         }
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
