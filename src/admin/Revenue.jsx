import "./Admin.css";

export default function Revenue() {

  const revenueData = [
    {
      title: "Room Booking",
      amount: 250000,
      color: "blue"
    },
    {
      title: "Food Orders",
      amount: 120000,
      color: "green"
    },
    {
      title: "Delivery Orders",
      amount: 50000,
      color: "orange"
    },
    {
      title: "Event Halls",
      amount: 80000,
      color: "red"
    }
  ];

  const total = revenueData.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div className="dashboard">

      <h1>💰 Revenue Dashboard</h1>

      {/* TOTAL REVENUE */}
      <div className="total-revenue">
        <h2 style={{color:"white"}}>Total Revenue</h2>
        <h1>Rs. {total.toLocaleString()}</h1>
      </div>

      {/* CARDS */}
      <div className="cards">

        {revenueData.map((item, index) => (
          <div
            key={index}
            className={`card ${item.color}`}
          >
            <h3>{item.title}</h3>
            <p>Rs. {item.amount.toLocaleString()}</p>
          </div>
        ))}

      </div>

      {/* SIMPLE REPORT TABLE */}
      <div className="table-box">

        <h2>Revenue Report</h2>

        <table>

          <thead>
            <tr>
              <th>Service</th>
              <th>Revenue</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {revenueData.map((item, index) => (
              <tr key={index}>

                <td>{item.title}</td>

                <td>Rs. {item.amount.toLocaleString()}</td>

                <td>
                  <span className="status-badge completed">
                    Active
                  </span>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}