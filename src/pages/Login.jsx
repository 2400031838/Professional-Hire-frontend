// Login.jsx - A simple login page with role selection and CAPTCHA verification
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [email, setEmail] = useState("");

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

  const handleLogin = () => {
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

    if (!email) {
      alert("Please enter email");
      return;
    }

    /* ✅ SAVE USER TO LOCALSTORAGE */
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: email.split("@")[0],  // show username before @
        role: role,
      })
    );

    /* ✅ Navigate Based on Role */
    if (role === "User") navigate("/user-dashboard");
    else if (role === "Professional")
      navigate("/professional-dashboard");
    else if (role === "Admin") navigate("/admin-dashboard");
    else if (role === "Support") navigate("/support-dashboard");
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
        <h2 style={{ marginBottom: "25px" }}>Login to ProHire 🚀</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
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

        <button style={buttonStyle} onClick={handleLogin}>
          Login
        </button>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Don’t have an account?{" "}
          <span
            style={{
              color: "#60a5fa",
              cursor: "pointer",
              fontWeight: "500",
            }}
            onClick={() => navigate("/register")}
          >
            Create one
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

export default Login;