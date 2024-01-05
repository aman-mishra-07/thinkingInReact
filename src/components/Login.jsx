import React, { useState } from "react";

const Login = ({loggedIn , isLoggedIn, isSkippedLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username.length < 3 && password.length < 8){
            return alert('please fill form');
        } 
        if(!loggedIn && (username.length >= 3 && password.length >= 8)){
          isLoggedIn(true)
        }
    }
  return (
    <>
    <div className="w-full min-h-screen flex items-center justify-center bg-stone-500">
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="w-full p-4 rounded-md bg-stone-400 space-y-4 shadow-xl">
          <h2 className="text-center font-semibold text-xl">Login</h2>
          <div>
            <input
              type="text"
              className="p-2 rounded border outline-none w-full"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              onBlur={(e) => e.target.value.length < 3 ? setUsernameError('name must be greater than 3 chars') : setUsernameError('') }
            />
            <p>{usernameError}</p>
          </div>
          <div>
            <input
              type="password"
              className="p-2 rounded border outline-none w-full"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={(e) => e.target.value.length < 8 ? setPasswordError('password must be greater than 8 chars') : setPasswordError('') }
            />
            <p>{passwordError}</p>
          </div>
          <div className="space-y-2">
            <button type="submit" className="w-full bg-blue-600 font-semibold text-white p-2 rounded">Login</button>
            <button type="button" className="w-full hover:underline" onClick={() => isSkippedLogin(true)}>Skip Login</button>
          </div>
        </div>
      </form>
    </div>
    
    </>
  );
};

export default Login;
