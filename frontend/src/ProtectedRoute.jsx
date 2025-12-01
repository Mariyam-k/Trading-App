import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [isValid, setIsValid] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setIsValid(false);

      const res = await axios.get("http://localhost:5000/api/auth/verify", {
        headers: { Authorization: token }
      });

      setIsValid(res.data.valid);
    };

    checkToken();
  }, []);

  if (isValid === null) return <p>Loading...</p>;

  return isValid ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
