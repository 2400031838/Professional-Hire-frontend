//user dashboard page with welcome message, services list, and quick action cards
import { useNavigate } from "react-router-dom";
import "../index.css";

function UserDashboard() {
  const navigate = useNavigate();

  const categories = [
    { name: "Technical", label: "💻 Technical / Digital" },
    { name: "Home", label: "🏠 Home & Local" },
    { name: "Academic", label: "📚 Academic / Training" },
    { name: "Creative", label: "🎨 Creative" },
    { name: "Professional", label: "💼 Professional" },
  ];

  return (
    <div style={{ padding: "40px", color: "white" }}>

      {/* Welcome Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #2563eb, #6366f1)",
          color: "white",
          padding: "35px",
          borderRadius: "16px",
          marginBottom: "50px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Welcome to ProHire 👋
        </h1>
        <p style={{ opacity: 0.9 }}>
          ProHire connects you with trusted professionals across multiple
          industries. Explore services, hire experts, and grow with confidence.
        </p>
      </div>

      {/* Category Section */}
      <h2
        style={{
          marginBottom: "25px",
          fontSize: "26px",
          fontWeight: "600",
          letterSpacing: "1px",
        }}
      >
        Our Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          marginBottom: "50px",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="zoom-hover"
            style={serviceCard}
            onClick={() => navigate(`/category/${category.name}`)}
          >
            {category.label}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <h2
        style={{
          marginBottom: "25px",
          fontSize: "26px",
          fontWeight: "600",
          letterSpacing: "1px",
        }}
      >
        Quick Actions
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        <div
          className="zoom-hover"
          style={actionCard}
          onClick={() => navigate("/search")}
        >
          <h3>Search Professionals</h3>
          <p>Browse and hire skilled professionals instantly.</p>
        </div>

        <div
          className="zoom-hover"
          style={actionCard}
          onClick={() => navigate("/my-bookings")}
        >
          <h3>My Bookings</h3>
          <p>Track and manage your service bookings.</p>
        </div>

        <div
          className="zoom-hover"
          style={actionCard}
          onClick={() => alert("Wallet feature coming soon!")}
        >
          <h3>Credit Wallet</h3>
          <p>View available credits and transactions.</p>
        </div>
      </div>
    </div>
  );
}

const serviceCard = {
  padding: "28px",
  background: "rgba(255,255,255,0.15)",
  borderRadius: "14px",
  backdropFilter: "blur(10px)",
  color: "white",
  textAlign: "center",
  fontWeight: "600",
  fontSize: "18px",
  cursor: "pointer",
  transition: "0.3s",
};

const actionCard = {
  padding: "30px",
  background: "rgba(255,255,255,0.15)",
  borderRadius: "16px",
  backdropFilter: "blur(12px)",
  color: "white",
  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
  cursor: "pointer",
  transition: "0.3s",
};

export default UserDashboard;