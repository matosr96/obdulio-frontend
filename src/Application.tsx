import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBox from "./components/LoadingBox";
import Inventory from "./screens/inventory/Inventory";
import NotFound from "./screens/NotFount";
import Login from "./screens/users/Login";

const Application = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Inventory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Application;
