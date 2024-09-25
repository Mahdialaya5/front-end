
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProfilPage from "./pages/ProfilPage";
import { useDispatch } from "react-redux";
import { GetProducts } from "./redux/actions/ActionProduct";
import { useEffect } from "react";
import Addproduct from "./pages/AddProduct";
import Editproduct from "./pages/EditProduct";
import NotFound from "./components/NotFound/NotFound";
import { getCurrent } from "./redux/actions/ActionUser";
import UserRoute from "./privateRoutes/UserRoute";
import AdminRoute from "./privateRoutes/AdminRoute";
import Admin from "./pages/Admin";

function App() {
 
  const dispatch=useDispatch()

 useEffect(() => {
    dispatch(GetProducts())

  }, [])



 
  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/register"  element={<Register/>}  />
      <Route path="/login"  element={<Login/>} />
      <Route path="/profil"  element={<UserRoute><ProfilPage/></UserRoute>} />
      <Route path="/addproduct"  element={<UserRoute><Addproduct/></UserRoute>} />
      <Route path="/edit/:id"  element={ <UserRoute><Editproduct/></UserRoute> } />
      <Route path="/admin"  element={ <AdminRoute><Admin/></AdminRoute> } />
      <Route path='*'  element={<Home/>} />
    </Routes>
  );
}

export default App;
