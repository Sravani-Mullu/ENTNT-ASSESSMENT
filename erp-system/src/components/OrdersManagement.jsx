import React from 'react';

function OrdersManagement() {
  // Sample order data
  const orders = [
    { id: 1, orderNumber: 'ORD-001', customerName: 'John Doe', orderDate: '2024-03-15', status: 'Pending', totalAmount: '$100.00' },
    { id: 2, orderNumber: 'ORD-002', customerName: 'Jane Smith', orderDate: '2024-03-16', status: 'Shipped', totalAmount: '$150.00' },
    { id: 3, orderNumber: 'ORD-003', customerName: 'Alice Johnson', orderDate: '2024-03-17', status: 'Delivered', totalAmount: '$200.00' },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Orders Management</h5>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Order List</h6>
              <table className="table">
                <thead>
                  <tr>
                    <th>Order Number</th>
                    <th>Customer Name</th>
                    <th>Order Date</th>
                    <th>Status</th>
                    <th>Total Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.orderNumber}</td>
                      <td>{order.customerName}</td>
                      <td>{order.orderDate}</td>
                      <td>{order.status}</td>
                      <td>{order.totalAmount}</td>
                      <td>
                        <button className="btn btn-outline-primary me-2">View Details</button>
                        <button className="btn btn-outline-secondary">Update Status</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersManagement;
