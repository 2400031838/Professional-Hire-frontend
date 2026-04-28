import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleRegister = async () => {
    if (userInput !== captchaText) {
      alert("Incorrect CAPTCHA ❌");
      generateCaptcha();
      setUserInput("");
      return;
    }

    if (!role) {
      alert("Please select a role");
      return;
    }

    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    try {
      const response = await fetch("https://professional-hire-backend-production.up.railway.app/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          role
        })
      });

      const data = await response.json();

      if (data) {
        alert("Account Created Successfully ✅");
        navigate("/login");
      }

    } catch (error) {
      console.error(error);
      alert("Registration failed ❌");
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={selectStyle}
        >
          <option value="">Select Role</option>
          <option value="USER">User</option>
          <option value="PROFESSIONAL">Professional</option>
          <option value="ADMIN">Admin</option>
          <option value="SUPPORT">Support</option>
        </select>

        {/* CAPTCHA */}
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