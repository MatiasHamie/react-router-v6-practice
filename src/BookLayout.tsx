// import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  // @ts-ignore
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 }); // mantienene el valor del state en el componente, agregua el ?var=algo
  const number = searchParams.get("/n");
  // const [number, setNumber] = useState("");
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      {/* 
        Recordar que el outlet muestra los componentes dinamicos / componente
        que se deberia renderizar segun la ruta que este escrita en el navegador 

        Tambien se le puede pasar un context, un objeto a todos los comp renderizados dentro de outlet
      */}
      {/* <Outlet /> */}
      <Outlet context={{ hello: "world" }} />
      <input
        type="number"
        value={number!}
        onChange={(e) => setSearchParams({n: e.target.value})}
      />
    </>
  );
};

export default BookLayout;
