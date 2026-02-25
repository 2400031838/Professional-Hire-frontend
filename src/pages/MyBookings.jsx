//My Bookings.jsx
import "../index.css";

function MyBookings() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>My Bookings 📅</h1>

      <div style={{
        marginTop: "30px",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
      }}>
        <h3>Ananya Sharma</h3>
        <p>Web Developer</p>
        <p>Status: Confirmed ✅</p>
      </div>

      <div style={{
        marginTop: "20px",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
      }}>
        <h3>Rahul Verma</h3>
        <p>Graphic Designer</p>
        <p>Status: Confirmed ✅</p>
      </div>

    </div>
  );
}

export default MyBookings;
