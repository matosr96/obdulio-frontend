import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({children}:any) => {
    const userSingin = useSelector((state:any) => state.userSingin);
    const {userInfo} = userSingin;
    return userInfo? children : <Navigate to="/login" />
}

export default AdminRoute;