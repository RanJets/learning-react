import { useState } from "react";

interface Props {
  //in typescript use interface to abstract objects that has its own types
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: string[];
  country: Country;
  gender?: Gender;
}

export enum Country {
  //enum is for selecting fix options
  Brazil = "Brazil",
  Canada = "Canada",
  France = "France",
}

export enum Gender {
  m = "male",
  f = "female",
}

export const Person = (props: Props) => {
  const [name, setName] = useState<string>("");
  return (
    <div>
      <h1>Name: {props.name} </h1>
      <h1>Email: {props.email} </h1>
      <h1>Age: {props.age} </h1>
      <h1>This Person {props.isMarried ? "is" : "is not"} married. </h1>
      {props.friends.map((friend: string) => (
        <h1>{friend}</h1>
      ))}
      <h1>Country: {props.country}</h1>
      <h1>Gender: {props.gender}</h1>
    </div>
  );
};
