import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import Notfound from "./pages/notfound/Notfound";
import "./App.css";
import Login from "./pages/auth/Login";
import Analytics from "./pages/dashboard/Analytics";
import ViewClient from "./pages/dashboard/client/ViewClient";
import Setting from "./pages/dashboard/setting/Setting";
import ClientRemind from "./pages/reminder/ClientRemind";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<Analytics />} />
        <Route path="/dashboard/client" element={<ViewClient />} />
        <Route path="/dashboard/setting" element={<Setting />} />
        <Route path="/dashboard/remind" element={<ClientRemind />} />
        <Route path="/dashboard/report" element={<ClientRemind />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
