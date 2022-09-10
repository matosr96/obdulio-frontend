import React from "react";
import { useSelector } from "react-redux";

const Inventory = () => {
  const userSingin = useSelector((state: any) => state.userSingin);
  const { userInfo } = userSingin;
  const { uuid } = userInfo;
  console.log(uuid);
  return <div>Inventory</div>;
};

export default Inventory;
