import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBox from "./components/LoadingBox";
import Inventory from "./screens/inventory/Inventory";
import NotFound from "./screens/NotFount";
import Login from "./screens/users/Login";
import AdminRoute from "./utilities/AdminRoute";

const Application = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <AdminRoute>
                {" "}
                <Inventory />{" "}
              </AdminRoute>
            }
          />
          <Route
            path="*"
            element={
              <AdminRoute>
                {" "}
                <NotFound />{" "}
              </AdminRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Application;
