import React from "react";
import OrderList from "./OrderList";
import { getAllOrders } from "../actions/get/get.action";

const OrderPage = async () => {
  const orders = await getAllOrders();

  return (
    <div>
      <h1>All Orders</h1>
      <OrderList orders={orders} />
    </div>
  );
};

export default OrderPage;
