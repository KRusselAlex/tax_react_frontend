import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if(token){

      setIsAuthenticated(true);

    }
    
  }, []);

  return isAuthenticated;
};
