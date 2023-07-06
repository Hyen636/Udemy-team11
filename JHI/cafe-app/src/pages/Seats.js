import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Seats() {
  const [seats, setSeats] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <h1>Seats</h1>
    </div>
  );
}
