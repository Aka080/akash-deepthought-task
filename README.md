## Q. How do you make sure that user remains authenticated on page refresh while using Context API State Management?
***
 Here I have demonstrated a simple implementation to persist loggedIn state, using Context API
```javascript

/// Context.js-----------------------------------------------------------
import React,{useState,useContext, useEffect} from 'react';
import axios from 'axios'
const AuthContext = React.createContext(undefined);

const AuthProvider = ({children})=>{
    const [auth,setAuth] = useState(false);
    const ifLoggedIn = () => {
        const token = sessionStorage.getItem('token');
        console.log(token)
        if(!token){
            setAuth(false)
        }
        else{
            setAuth(true)
        }
    }

    const setAuthToken = async ()=>{
        await axios('/')
        .then(res=> {
            sessionStorage.setItem('token','success')
        setAuth('true')})
        .catch(res=> console.log(res.data))
    }
     const removeToken = ()=>{
        sessionStorage.removeItem('token');
        setAuth(false);
     }  
    const data = [auth,ifLoggedIn,setAuthToken,removeToken]
    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
}

const useAuth = () =>{
    const context = useContext(AuthContext);
    if(context===undefined){
        throw new Error ('useAuth can only be used inside AuthProvide')
    }
    return context;
}
export {useAuth,AuthProvider}
```
***
App.js file

```javascript
// App.js-----------------
import React,{useEffect} from 'react'
import './app.css'
import { useAuth } from "./context";
const App = () => {
  const [auth, ifLoggedIn,setAuthToken,removeToken] = useAuth();
  useEffect(()=>{
    ifLoggedIn()
  },[])
  
  return (
    <div className = 'centerBox'>
      <h3>Is authenticated?</h3>
      <h1>{auth === false ? "Not authenticated!" : "Authenticated!"}  </h1>
      <button onClick={setAuthToken}>login</button>
      <button onClick={removeToken}>logout</button>
    </div>
  );
};

export default App;

```
***
Index.js

```javascript
///Index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {AuthProvider} from './context'



ReactDOM.render(
    <AuthProvider><App/></AuthProvider>

,document.querySelector('#root'));
```

Final app looks like:

![context api implementation](screenShot.JPG)