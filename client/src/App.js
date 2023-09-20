import "./App.css";

import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import ServicePage from "./pages/ServicePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="service" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;
