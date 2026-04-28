// AddService.jsx

import { useState } from "react";

const categories = {
  Technical: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Data Analysis",
    "Software Testing",
    "Cybersecurity Support"
  ],
  Creative: [
    "Graphic Design",
    "Video Editing",
    "Content Writing",
    "Photography"
  ],
  Home: [
    "Electrician",
    "Plumber",
    "Carpenter",
    "House Cleaning",
    "AC Repair"
  ],
  Professional: [
    "Resume Building",
    "Digital Marketing",
    "Business Consulting"
  ]
};

const BASE_URL =
  "https://professional-hire-backend-production.up.railway.app";

function AddService() {
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [service, setService] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    const serviceData = {
      mainCategory,
      subCategory,
      name: service,
      price,
      email: user.email
    };

    try {
      const res = await fetch(`${BASE_URL}/services/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(serviceData)
      });

      if (res.ok) {
        alert("Service added successfully ✅");
        setMainCategory("");
        setSubCategory("");
        setService("");
        setPrice("");
      } else {
        alert("Error adding service ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return <div>{/* your existing JSX same */}</div>;
}

export default AddService;