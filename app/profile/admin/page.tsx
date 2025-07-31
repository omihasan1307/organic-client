import RoleRoute from "@/component/role-route";
import DashboardLayout from "@/layout/DashboardLayout";
import React from "react";

const AdminDashboard = () => {
  return (
    <RoleRoute allowedRoles={["admin"]}>
      <DashboardLayout>Admin</DashboardLayout>;
    </RoleRoute>
  );
};

export default AdminDashboard;
