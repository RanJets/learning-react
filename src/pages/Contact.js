import { useNavigate } from "react-router-dom";
export const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is the Contact Page</h1>
      <button
        onClick={() => {
          navigate("/menu");
        }}
      >
        Go to Menu
      </button>
    </div>
  );
};
