const OrderList = ({ orders }: { orders: any }) => {
  return (
    <div>
      <h1>All Orders</h1>
      <ul>
        {orders.map((order: any) => (
          <li key={order.id}>
            {order.customerName} - ${order.total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
