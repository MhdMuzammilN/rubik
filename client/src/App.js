import "./App.css";

import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import ServicePage from "./pages/ServicePage";
import NavBar from "./components/NavBar";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="contact" element={<ContactUs/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
