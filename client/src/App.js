import "./App.css";

import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import ServicePage from "./pages/ServicePage";
import NewFile from "./pages/NewFile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="admin" element={<AdminPage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="new" element={<NewFile/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
