import React, { useEffect, useState } from "react";
import app_config from "../../config";

const ManageOrder = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.backend_url;
  const fetchData = () => {
    fetch(url + "/order/getbyuser/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    if (!loading) {
      //   return orders.map(({}) => ())
    }
  };

  return (
    <div className="container py-5">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center">Place Orders</h2>
          <hr />
          <table className="table">
            <thead>
              <tr>
                <th>Place On</th>
              </tr>
            </thead>
          </table>
          {displayData()}
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
