import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/Register";
import Auth from "../components/Auth";
import TodoPage from "../pages/TodoPage";
import AdminPage from "../pages/AdminPage";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={< TodoPage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route 
        path="/todo" 
        element={
          <Auth>
            <TodoPage />
          </Auth>
        } 
      />
      <Route 
        path="/admin" 
        element={
          <Auth>
            <AdminPage />
          </Auth>
        } 
      />
    </Routes>
  );
};

export default AppRoutes;
