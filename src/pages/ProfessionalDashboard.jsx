import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL =
  "https://professional-hire-backend-production.up.railway.app";

function ProfessionalDashboard() {
  const navigate = useNavigate();

  const [earnings, setEarnings] = useState(0);
  const [clients, setClients] = useState(0);
  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user || !user.email) return;

    const fetchBookings = () => {
      fetch(`${BASE_URL}/booking/professional/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);

          let total = 0;

          data.forEach((b) => {
            const price =
              parseInt(String(b.price).replace(/[^0-9]/g, "")) || 0;
            total += price;
          });

          setEarnings(total);
          setClients(data.length);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    fetchBookings();

    const interval = setInterval(fetchBookings, 5000);

    return () => clearInterval(interval);
  }, [user]);

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Professional Dashboard 👨‍💼</h1>

      <h2>Total Earnings: ₹{earnings}</h2>
      <h2>Total Bookings: {clients}</h2>

      <button
        onClick={() => navigate("/add-service")}
        style={{
          padding: "10px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Add Service
      </button>

      <h2 style={{ marginTop: "40px" }}>My Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        bookings.map((b, index) => (
          <div
            key={index}
            style={{
              marginTop: "15px",
              padding: "20px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "10px"
            }}
          >
            <p>
              <strong>Service:</strong> {b.service}
            </p>

            <p>
              <strong>Price:</strong> ₹{b.price}
            </p>

            <p>
              <strong>Date:</strong> {b.date}
            </p>

            <p>
              <strong>Time:</strong> {b.time}
            </p>

            <p style={{ color: "#22c55e" }}>
              Hired ✅
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProfessionalDashboard;