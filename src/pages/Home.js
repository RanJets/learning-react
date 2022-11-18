import { useContext } from "react";
import App, { AppContext } from "../App";

export const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <p>username: {username}</p>
      <h1>This is the Home Page</h1>
    </div>
  );
};
