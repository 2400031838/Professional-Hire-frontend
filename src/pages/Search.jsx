import { useState } from "react";
import "../index.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hiredIds, setHiredIds] = useState([]);

  const professionals = [
    { id: 1, name: "Ananya Sharma", skill: "Web Developer", rating: 4.8, price: "₹800/hr" },
    { id: 2, name: "Rahul Verma", skill: "Graphic Designer", rating: 4.6, price: "₹600/hr" },
    { id: 3, name: "Sneha Patel", skill: "Digital Marketer", rating: 4.9, price: "₹1000/hr" },
    { id: 4, name: "Arjun Reddy", skill: "Photographer", rating: 4.7, price: "₹1200/hr" }
  ];

  // Filter professionals based on search input
  const filteredProfessionals = professionals.filter((pro) =>
    pro.skill.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  const handleHire = (id) => {
    setHiredIds([...hiredIds, id]);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>Search Professionals 🔍</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by skill..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "30px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      {/* Professionals Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px"
      }}>
        {filteredProfessionals.length > 0 ? (
          filteredProfessionals.map((pro) => (
            <div key={pro.id} className="zoom-hover" style={cardStyle}>
              <h3>{pro.name}</h3>
              <p>{pro.skill}</p>
              <p>⭐ {pro.rating}</p>
              <p style={{ fontWeight: "bold" }}>{pro.price}</p>

              <button
                style={{
                  ...buttonStyle,
                  backgroundColor: hiredIds.includes(pro.id) ? "green" : "#2563eb",
                  cursor: hiredIds.includes(pro.id) ? "not-allowed" : "pointer"
                }}
                disabled={hiredIds.includes(pro.id)}
                onClick={() => handleHire(pro.id)}
              >
                {hiredIds.includes(pro.id) ? "Hired ✅" : "Hire Now"}
              </button>
            </div>
          ))
        ) : (
          <p>No professionals found.</p>
        )}
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "25px",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
};

const buttonStyle = {
  marginTop: "15px",
  padding: "10px",
  width: "100%",
  color: "white",
  border: "none",
  borderRadius: "6px"
};

export default Search;