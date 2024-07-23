import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import ProductCard from '../components/ProductCard';
import styles from './products.module.css';
import { useSearchParams } from 'react-router-dom';

export const productReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...prevState, loading: true, error: false };
    case "ERROR":
      return { ...prevState, loading: false, error: true };
    case "SUCCESS":
      return { ...prevState, loading: false, error: false, data: payload };
    default:
      return prevState;
  }
}

const Products = () => {
  const [state, dispatch] = useReducer(productReducer, {
    loading: false,
    error: false,
    data: [],
  });
  const [searchParam, setSearchParam] = useSearchParams();
  const [category, setCategory] = useState(searchParam.get("category") || "all");

  const { loading, error, data } = state;

 

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios({
        baseURL: import.meta.env.VITE_BASE_URL,
        url: "/products",
        method: "GET",
        params: category !== "all" ? { category } : {},
      });
      dispatch({ type: "SUCCESS", payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR" });
    }
  }

  useEffect(() => {
    setSearchParam((prevSearchParam) => {
      const newSearchParam = new URLSearchParams(prevSearchParam);
      newSearchParam.set("category", category);
      return newSearchParam;
    });
    fetchData();
  }, [category]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <select value={category} onChange={(event) => setCategory(event.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="fitness">Fitness</option>
        <option value="footwear">Footwear</option>
        <option value="clothing">Clothing</option>
      </select>
      <div className={styles.grid}>
        {data.map((el) => <ProductCard key={el.id} {...el} />)}
      </div>
    </>
  );
}

export default Products;
