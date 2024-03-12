import React from 'react';

function ProductManagement() {
  // Sample product data
  const products = [
    { id: 1, name: 'Product A', price: '$10.00', quantity: 100 },
    { id: 2, name: 'Product B', price: '$15.00', quantity: 50 },
    { id: 3, name: 'Product C', price: '$20.00', quantity: 75 },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-body d-flex justify-content-between align-items-center">
              <h5 className="card-title">Product Management</h5>
              <button className="btn btn-primary">Add Product</button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">Product List</h6>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <button className="btn btn-outline-primary me-2">Edit</button>
                        <button className="btn btn-outline-danger">Delete</button>
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

export default ProductManagement;
