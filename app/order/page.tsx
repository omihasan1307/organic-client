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

// 'use client'
// import { useEffect, useState } from 'react'

// export default function OrdersPage() {
//   const [orders, setOrders] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     fetch('/api/admin/orders')
//       .then(res => res.json())
//       .then(data => {
//         setOrders(data)
//         setLoading(false)
//       })
//       .catch(err => {
//         setError(err.message)
//         setLoading(false)
//       })
//   }, [])

//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error: {error}</p>

//   return (
//     <div>
//       <h1>All Orders</h1>
//       <ul>
//         {orders.map(order => (
//           <li key={order.id}>{order.customerName} - ${order.total}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
