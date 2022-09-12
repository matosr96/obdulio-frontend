import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBox from "./components/LoadingBox";
import { Login, Register } from "./screens";
import Inventory from "./screens/inventory/Inventory";
import ListInventory from "./screens/inventory/ListInventory";
import NotFound from "./screens/NotFount";

import AdminRoute from "./utilities/AdminRoute";

const Application = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
            path="/inventary"
            element={
              <AdminRoute>
                {" "}
                <ListInventory />{" "}
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
