// Dashboard.js
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';


function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
    const inventoryStatus = {
        totalProducts: 100,
        outOfStockProducts: 5,
        topSellingProduct: 'Product X',
        inventoryValue: '$50,000',
      };

    const recentInventoryUpdates = [
        { id: 1, message: 'New product added: Product A' },
        { id: 2, message: 'Inventory restocked: Product B' },
        { id: 3, message: 'Product discontinued: Product C' },
    ];

  return (
    <div className="container-fluid">
      <div className='bg-dark col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column'>
        <div>
        <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2'>
          <span className='ms-1 fs-4 d-none d-sm-inline'>Brand</span>
        </a>
        <hr className='text-secondary d-none d-sm-block'/>
        <ul className='nav nav-pills flex-column mt-3 mt-sm-0'>
          <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a href="/" class='nav-link text-white fs-5' aria-current='page'>
              <i className='bi bi-speedometer2'></i>
              <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
            </a>
          </li>
          <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
          <a href="/products" class='nav-link text-white fs-5' aria-current='page'>
              <i className='bi bi-grid'></i>
              <span className='ms-3 d-none d-sm-inline'>Products</span>
            </a>
          </li>
          <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
          <a href="/orders" class='nav-link text-white fs-5' aria-current='page'>
              <i className='bi bi-table'></i>
              <span className='ms-3 d-none d-sm-inline'>Orders</span>
            </a>
          </li>
          <li class="nav-item text-white fs-4 my-1">
          <a href="/ordercalender" class='nav-link text-white fs-5' aria-current='page'>
              <i className='bi bi-speedometer2'></i>
              <span className='ms-3 d-none d-sm-inline'>Order Calender</span>
            </a>
          </li>
        </ul>
        </div>
        <div class="dropdown open">
          <a class="text-decoration-none text-white dropdown-toggle p-3" type='button' id='triggerid' data-bs-toggle='dropdown' aria-expanded="false">
            <i className='bi bi-person-circle'></i> <span className='ms-2 d-none d-sm-inline'>Yousaf</span>
          </a>
          <div class='dropdown-menu' aria-labelledby='triggerId'>
            <a class='dropdown-item' href='#'><span className='d-sm-inline'>1</span><span className='d-none d-sm-block'>Profile</span></a>
            <a class='dropdown-item' href='#'><span className='d-sm-inline'>2</span><span className='d-none d-sm-block'>Settings</span></a>
          </div>
        </div>
      </div>

      







      <div className='row'>
      <div className={`col-3 bg-light border-end ${isOpen ? 'open' : 'closed'}`} id="sidebar">
          <div className="sidebar-heading">My App</div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" activeClassName="active">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/orders" className="nav-link" activeClassName="active">
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ordercalender" className="nav-link" activeClassName="active">
                Order Calender
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`col-9 ${isOpen ? 'open' : 'closed'}`}>
        <button className="btn btn-primary toggle-button" data-toggle="collapse" data-target="#sidebar" onClick={toggleNavbar}>
            {isOpen ? 'Close' : 'Open'} Sidebar
        </button>
      <div className="container mt-4"> 
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Dashboard</h5>
              <p className="card-text">Welcome to the ERP Dashboard.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Sales Chart</h5>
              <p className="card-text">This is a sales chart showing the monthly sales data.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Inventory Status</h5>
              <p className="card-text">
                Total Products: {inventoryStatus.totalProducts}<br />
                Out of Stock: {inventoryStatus.outOfStockProducts}<br />
                Top Selling Product: {inventoryStatus.topSellingProduct}<br />
                Inventory Value: {inventoryStatus.inventoryValue}
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Recent Inventory Updates</h5>
              <ul className="list-group list-group-flush">
                {recentInventoryUpdates.map((update, index) => (
                  <li key={index} className="list-group-item">{update.message}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
