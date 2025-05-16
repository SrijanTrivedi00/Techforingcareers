import { useEffect } from "react";

const RedirectHome = () => {
  useEffect(() => {
    window.location.replace("https://career.techforing.com/");
  }, []);

  return null; 
};

export default RedirectHome;
