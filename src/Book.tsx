import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  //@ts-ignore
  const { hello } = useOutletContext();

  return (
    <div>
      <h1> Book: {id}</h1>
      <p>pasado por context: {hello}</p>
    </div>
  );
};

export default Book;
