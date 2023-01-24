import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  // si queremos que navegue a una ruta si se renderiza este componente
  // return <Navigate to="/" />;

  // Como redireccionar pero con el objeto, 
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      // navigate(-1); //esto vuelve para atras
    }, 1000);
  }, []);

  return <h1>Not Found</h1>;
};

export default NotFound;
