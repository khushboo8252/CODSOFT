import React,{createContext,useState} from 'react';

export const Authcontext = createContext();

const AuthContextProvider = ({children}) => {
    console.log(children)
    const [authState, setAuthState] = useState({
        token:null,
        isAuth:true,
    });

    const login = (token) =>{
      setAuthState({
        token,
        isAuth:true,
      });
    };

    const logout = () =>{
        setAuthState({
          token:null,
          isAuth:false,
        });
      };
  return (
    <Authcontext.Provider value={{authState,login,logout}}>{children}</Authcontext.Provider>
  )
}

export default AuthContextProvider;