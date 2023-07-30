import { Route, Routes } from "react-router-dom";
import { Homepage, NotFound, Products, Sales, Settings } from "../pages";
import ProtectedRoute from "./protectedRoute";

const MainRouting = () => {
    return (
      <Routes>
        <Route index element={<ProtectedRoute page={<Homepage />} />} />
        <Route
          path="/home"
          element={<ProtectedRoute page={<Homepage />} />}
        />
        <Route
          path="/products"
          element={<ProtectedRoute page={<Products />} />}
        />
        <Route
          path="/sales"
          element={<ProtectedRoute page={<Sales />} />}
        />
        <Route
          path="/settings"
          element={<ProtectedRoute page={<Settings />} />}
        />
  
        <Route path="*" element={<ProtectedRoute page={<NotFound />} />} />
      </Routes>
    );
  };
  
export default MainRouting;