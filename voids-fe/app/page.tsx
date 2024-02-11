"use client";
import React, { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get("http://localhost:3000/supply");

        console.log({ response });
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  return <p>Something</p>;
}
