import React from "react";
import { Outlet } from "react-router";

const DashLayout = () => {
  return (
    <div className="admin-layout">
      DashLayout
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default DashLayout;
