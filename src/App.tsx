import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import Notfound from "./pages/notfound/Notfound";
import "./App.css";
import Login from "./pages/auth/Login";
import Analytics from "./pages/dashboard/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Analytics />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
