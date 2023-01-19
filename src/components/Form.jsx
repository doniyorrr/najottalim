import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/Product";

const Form = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          className="form-control"
          id="title"
          placeholder="title"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">description</label>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          className="form-control"
          id="description"
          placeholder="description"
        />
      </div>
      <div className="form-check"></div>
      <button
        onClick={() => dispatch(addProduct(data))}
        type="submit"
        className="btn btn-primary"
      >
        add
      </button>
    </form>
  );
};

export default Form;
