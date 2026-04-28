// ProfessionalDashboard.jsx

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
    const fetchBookings = () => {
      fetch(`${BASE_URL}/booking/professional/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);

          let total = 0;
          data.forEach((b) => {
            const price = parseInt(
              String(b.price).replace(/[^0-9]/g, "")
            ) || 0;
            total += price;
          });

          setEarnings(total);
          setClients(data.length);
        });
    };

    fetchBookings();

    const interval = setInterval(fetchBookings, 5000);
    return () => clearInterval(interval);
  }, [user.email]);

  return <div>{/* your existing JSX same */}</div>;
}

export default ProfessionalDashboard;