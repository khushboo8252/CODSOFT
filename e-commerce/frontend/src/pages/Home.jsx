import React,{useState} from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  console.log(state)

  const handleClick = () =>{
   setState(true);
  }
  return (
    <div>
      <button onClick={() =>{
        navigate("/products")
      }}>Navigate to product page using useNavigate</button>
      <button onClick={handleClick}>Navigate to product page using Navigate component</button>
      <Link to="/products">
      <button>Navigate using link component</button>
      </Link>
       {state && <Navigate to="/products"/>}
    </div>
  )
}

export default Home;