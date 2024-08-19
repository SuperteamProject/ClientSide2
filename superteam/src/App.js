import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboardPage";
import AdminPreview from "./pages/AdminPreviewPage";
import UserMenu from "./pages/UserMenuPage";
import AdminEditPizza from "./pages/AdminEditPizzaPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin/add-product" element={<AdminDashboard />} />
          <Route path="/admin/edit-product" element={<AdminEditPizza />} />
          <Route path="/admin/preview" element={<AdminPreview />} />
          <Route path="/menu" element={<UserMenu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
