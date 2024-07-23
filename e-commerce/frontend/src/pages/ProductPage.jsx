import React,{useEffect,useReducer} from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import axios from 'axios';
import { productReducer } from './Products';
import styles from './productPage.module.css';


const ProductPage = () => {
  const {product_id} = useParams();

  const [state, dispatch] = useReducer(productReducer,{
    loading:false,
    error:false,
    data:{},
  });

  const {loading, error, data} = state;

  const {image, name, description, price} = state.data;



  const fetchData = async ()=>{
    try {
      const {data} = await axios({
        baseURL:import.meta.env.VITE_BASE_URL,
        url:`/products/${product_id}`,
        method:"GET"
      });
      console.log(data);
      dispatch({type:"SUCCESS", payload:data})

    } catch (error) {
      console.log(error)
      dispatch({type:"ERROR"})
    }
  }
  useEffect(() =>{
    fetchData();
  },[]);

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  return (
    <div className={styles.flex}>
      <div>
        <img src={image} alt={name}/>
      </div>
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>Rs. {price}</h3>
        <button>Add to Card</button>
      </div>
    </div>
  )
}

export default ProductPage;