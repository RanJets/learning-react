import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { Profile } from "./pages/Profile";
import { useState, createContext } from "react";
//Use context is used to store data globally - alternative for props
//CreateContext first to create a use context
export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      {/* then wrap the whole routes with AppContext Component */}
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
