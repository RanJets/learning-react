import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return axios.get(`https://catfact.ninja/fact`).then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Sorry there was an error...</h1>;
  }

  return (
    <div>
      <h1>
        This is the Home Page <p>{catData?.fact}</p>
        <button onClick={refetch}>Update Data</button>
      </h1>
    </div>
  );
};
