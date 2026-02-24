import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  const handleRegister = () => {
    if (userInput !== captchaText) {
      alert("Incorrect CAPTCHA. Try again.");
      generateCaptcha();
      setUserInput("");
      return;
    }

    if (!role) {
      alert("Please select a role");
      return;
    }

    alert("Account Created Successfully!");
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div
        className="glass-card"
        style={{
          width: "380px",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ marginBottom: "25px" }}>Create Account 🚀</h2>

        <input
          type="text"
          placeholder="Full Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={selectStyle}
        >
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Professional">Professional</option>
          <option value="Admin">Admin</option>
          <option value="Support">Support</option>
        </select>

        {/* CAPTCHA DISPLAY */}
        <div
          style={{
            margin: "15px 0",
            fontSize: "20px",
            letterSpacing: "4px",
            fontWeight: "bold",
            background: "rgba(255,255,255,0.15)",
            padding: "8px",
            borderRadius: "6px",
            userSelect: "none",
          }}
        >
          {captchaText}
        </div>

        <input
          type="text"
          placeholder="Enter CAPTCHA"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={inputStyle}
        />

        <button style={buttonStyle} onClick={handleRegister}>
          Register
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#60a5fa", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.1)",
  color: "white",
  outline: "none",
};

const selectStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  backgroundColor: "white",
  color: "black",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "linear-gradient(90deg, #3b82f6, #6366f1)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
};

export default Register;