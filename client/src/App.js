import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthUser } from "./redux/actions";
import Dashboard from "./components/pages/dashboard";
import Home from "./pages/FrontHome/FrontHome";
import Patient from "./components/pages/patient-dashboard";
import Secretaire from "./components/pages/secretaire-dashboard";
import { Routes, Route } from "react-router-dom";
import Nutritionnistedash from "./components/pages/Nutritionniste-dash";
import LoginModal from "./components/auth/loginModal";
import RegisterModal from "./components/auth/RegisterModal";
import PrivateRoute from "./components/pages/PrivateRoute";
import PatientList from "./components/pages/patient-list";
import AddVideoForm from "./components/pages/AddVideoForm";
import VideoList from "./components/pages/videoList";
import HomeDashboard from "./pages/DashboardAdmin/Home"


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthUser());
  }, []);
  return (
    <div className="App">
      <Routes>
      <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
        <Route path="/" element={<Home />} />
        <Route path="/HomeDashboard" element={<HomeDashboard/>} />
        <Route path="/patient-dash" element={<Patient />} />
        <Route path="/secretaire-dash" element={<Secretaire />} />
        <Route path="/Nutritionniste-dash" element={<Nutritionnistedash />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/SignUp" element={<RegisterModal />} />
        <Route path="/patient-list" element={<PatientList/>} />
        <Route path="/add-video" element={<AddVideoForm/>} />
        <Route path="/video-list" element={<VideoList/>} />
        
      </Routes>
    </div>
  );
}

export default App;
