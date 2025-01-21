import React, { useState, useEffect } from "react";

export const UsingUseEffect = () => {
  const [count, setCount] = useState(0);
  let inc = () => {
    setCount((prev) => prev + 1);
  };
  let dec = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    console.log("Use Effect is working");
  }, []); //the elements that are present in dependency array will make to re render the use effect after the elements update
  return (
    <div>
      <h3>Hey We are using Use-Effect here...</h3>
      {
        <>
          <button onClick={inc}>+1</button>
          count = {count}
          <button onClick={dec}>-1</button>
        </>
      }
    </div>
  );
};
