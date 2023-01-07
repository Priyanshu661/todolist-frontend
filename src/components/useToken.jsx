import  { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token') ;
    const userToken = tokenString !== "undefined" ?JSON.parse(tokenString):null;
    return userToken?._id
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken._id);
  };

  return {
    setToken:saveToken,
    token
  }

}


