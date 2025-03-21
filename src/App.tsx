import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import Notfound from "./pages/notfound/Notfound";
import "./App.css";
import Login from "./pages/auth/Login";
import Analytics from "./pages/dashboard/Analytics";
import ViewClient from "./pages/dashboard/client/ViewClient";
import Setting from "./pages/dashboard/setting/Setting";
import ClientRemind from "./pages/reminder/ClientRemind";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from "./services/ProtectedRoutes";
import { ProtectedLogin } from "./services/ProtectLogin";
import ClientPage from "./pages/dashboard/client/ClientPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/auth/login"
            element={
              <ProtectedLogin>
                <Login />
              </ProtectedLogin>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/client"
            element={
              <ProtectedRoute>
                {" "}
                <ViewClient />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/setting"
            element={
              <ProtectedRoute>
                <Setting />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/remind"
            element={
              <ProtectedRoute>
                <ClientRemind />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/client/:id"
            element={
              <ProtectedRoute>
                <ClientPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
