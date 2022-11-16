import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");
  //IN this Lesson I used useEffect hook for the life cycle of a component
  //the Mount Update and Unmount stages
  useEffect(
    () => {
      //for mounting
      console.log("COMPONENT MOUNTED");

      return () => {
        //use return for unmounting
        console.log("COMPONENT UNMOUNTED");
      };
    },
    [] //insert array for updating
  );

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
};
