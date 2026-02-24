import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Welcome to ProHire 🚀
      </h1>

      <button
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => navigate("/login")}
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;