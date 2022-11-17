import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Navbar } from "./Navbar";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div>
      {/* The perfect layout for Routes using react-router-dom */}
      <Router>
        {/* in this space you can put all your links or navbar components */}
        <Navbar />
        {/* usually links come first before routes */}
        <Routes>
          {/* in this space you can put all your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:username" element={<Profile />} />
          {/* the ':username' is how you create parameters */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
      <h3>Footer</h3>
    </div>
  );
}

export default App;
