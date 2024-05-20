/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (role != 1) {
      navigate("/");
    }
  }, []);
  return role == 1 ? <Component /> : null;
};

export { ProtectedRoute };
