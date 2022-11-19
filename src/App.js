import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Cat } from "./Cat";
import { useToggle } from "./useToggle";
import { useToggle2 } from "./useToggle2";

//This Lesson is for creating custom Hook as an abstraction for functionality
function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  const [isVisible, toggle] = useToggle(); //custom hook with an array to return
  const { state: isVisible2, toggle2 } = useToggle2(); //custom hook with an object to return, with declaring alias

  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        <h1>{isVisible && "Hiddent TExt"}</h1>

        <button onClick={toggle2}>{isVisible2 ? "Hide2" : "Show2"}</button>
        <h1>{isVisible2 && "Hiddent Text 2"}</h1>
        <hr />
      </div>
      <Cat />
    </QueryClientProvider>
  );
}

export default App;
