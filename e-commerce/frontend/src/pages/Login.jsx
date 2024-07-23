import React,{useContext, useReducer} from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Authcontext } from '../context/AuthContextProvider';
import {useNavigate} from 'react-router-dom';


const formReducer = (prevState, {type, payload}) =>{
      switch (type) {
        case"email":
           return {...prevState, email:payload};

        case"password":
           return {...prevState, password:payload};

        case "reset":{
           return {email: "" , password:""};
        }
        case "LOADING":
          return {...prevState, loading:true};
        
          case "ERROR":
            return {...prevState, error:true, loading:true};
          
          case "SUCCESS":
            return {...prevState, error:false, loading:false};

        default:
          return prevState;
      }
}

const Login = () => {
  const [state, dispatch] = useReducer(formReducer,{
    email:"" , password:"", loading:false, error:false,
  });

  const {loading, error, email, password} = state;

  const {login} = useContext(Authcontext);

  const navigate = useNavigate();

  const handleChnage = (event) =>{
    const {name, value} = event.target;
    dispatch({
      type:name, payload:value
    })
  }

  const handleSubmit = async(event) =>{
     event.preventDefault();
     
     dispatch({type:"LOADING"});
     try {
      const {data} = await axios({
        baseURL:"https://reqres.in/api/login",
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        data:{email,password},
      });
      dispatch({type:"SUCCESS"})
      login(data.token)
      dispatch({type:"reset"});
      navigate("/")
     } catch (error) {
      dispatch({type:"ERROR"});
      console.log(error)
      dispatch({type:"reset"});
     }
     
  };

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }
  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Email</td>
            <td>
              <input name='email' onChange={handleChnage} value={email} type='text'/>
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input name='password' onChange={handleChnage} value={password} type='text'/>
            </td>
          </tr>
          <tr>
            <td>
              <input type='submit'/>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default Login;