// ViewBookings.jsx - A page to display all bookings made by clients, accessible by support agents
function ViewBookings() {
  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>All Bookings</h1>

      {bookings.length === 0 && <p>No bookings yet.</p>}

      {bookings.map((b, index) => (
        <div key={index} style={cardStyle}>
          <p><strong>Client:</strong> {b.name}</p>
          <p><strong>Service:</strong> {b.service}</p>
          <p><strong>Price:</strong> {b.price}</p>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.15)",
  padding: "20px",
  borderRadius: "12px",
  marginTop: "15px",
};

export default ViewBookings;