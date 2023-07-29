import { Route, Routes } from "react-router-dom";
import { Homepage, NotFound } from "../../pages";

const MainRouting = () => {
    return (
      <Routes>
        <Route index element={<Homepage />} />
        <Route
          path="/dashboard"
          element={<Homepage />}
        />
  
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
  export default MainRouting;