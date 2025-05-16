import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));


  useEffect(() => {
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  }, [token]);


  const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  

  
    if (users.find((user) => user.email === email)) {
      return { success: false, message: "User already exists!" };
    }

    
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true, message: "Signup successful! Please log in." };
  };


  const login = (email, password) => {

    const users = JSON.parse(localStorage.getItem("register")) || [];

    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );



    if (!existingUser) {
      return { success: false, message: "Invalid email or password!" };
    }

   
    const fakeHeader = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
    const fakePayload = btoa(JSON.stringify({ email, exp: Date.now() + 1000 * 60 * 60 }));
    const fakeSignature = "randomsignature";  

    const fakeToken = `${fakeHeader}.${fakePayload}.${fakeSignature}`;


    localStorage.setItem("token", fakeToken);
    setToken(fakeToken);
    setUser({ email });

    return { success: true, message: "Login successful!" };
};



  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
