import { useNavigate, useParams } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate(); //this hook is to create a navigation for every routes of the page
  const { username } = useParams(); //this hook accepts parameters that passed in the url
  return (
    <div>
      <h1>This is {username} Profile</h1>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};
