import { Route, Routes } from "react-router-dom";
import { Homepage, NotFound, Products, Sales, Settings } from "../pages";

const MainRouting = () => {
    return (
      <Routes>
        <Route index element={<Homepage />} />
        <Route
          path="/home"
          element={<Homepage />}
        />
        <Route
          path="/products"
          element={<Products />}
        />
        <Route
          path="/sales"
          element={<Sales />}
        />
        <Route
          path="/settings"
          element={<Settings />}
        />
  
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
export default MainRouting;