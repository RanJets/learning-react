import { ChangeProfile } from "../components.js/ChangeProfile";
import { useContext } from "react";
import App, { AppContext } from "../App";

export const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>Profile username: {username}</h1>
      <ChangeProfile />
    </div>
  );
};
