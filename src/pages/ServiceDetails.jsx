// ServiceDetails.jsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL =
  "https://professional-hire-backend-production.up.railway.app";

function ServiceDetails() {
  const { serviceName } = useParams();
  const decodedService = decodeURIComponent(serviceName);

  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch(`${BASE_URL}/services/subcategory/${decodedService}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [decodedService]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BASE_URL}/services/delete/${id}`, {
        method: "DELETE"
      });

      if (res.ok) {
        alert("Service deleted ✅");
        setServices(services.filter((s) => s.id !== id));
      } else {
        alert("Delete failed ❌");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleBooking = async () => {
    if (!date || !time) {
      alert("Select date & time");
      return;
    }

    const bookingData = {
      name: selected.name,
      service: decodedService,
      price: selected.price,
      date,
      time,
      professionalEmail: selected.email
    };

    try {
      const res = await fetch(`${BASE_URL}/booking/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      });

      if (res.ok) {
        alert("Booked Successfully ✅");
      } else {
        alert("Booking failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return <div>{/* your existing JSX same */}</div>;
}

export default ServiceDetails;