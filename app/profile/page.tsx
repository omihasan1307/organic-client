import RoleRoute from "@/component/role-route";
import DashboardLayout from "@/layout/DashboardLayout";
import React from "react";

const ProfilePage = () => {
  return (
    <RoleRoute allowedRoles={["user", "admin"]}>
      <DashboardLayout>Profile bhai profile</DashboardLayout>
    </RoleRoute>
  );
};

export default ProfilePage;
