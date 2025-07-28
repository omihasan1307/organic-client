import MainLayout from "@/layout/MainLayout";
import React from "react";

const OrderPage = async () => {
  // const orders = await getAllOrders();

  return (
    <MainLayout>
      <h1>All Orders</h1>
      {/* <OrderList orders={orders} /> */}
    </MainLayout>
  );
};

export default OrderPage;
