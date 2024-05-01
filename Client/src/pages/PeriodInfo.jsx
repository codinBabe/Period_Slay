import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PeriodDatas from "../components/PeriodDatas";
import PeriodStatus from "../components/PeriodStatus";
import PeriodCycles from "../components/PeriodCycles";

export default function PeriodInfo() {
  const [periodData, setPeriodData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("/calculate", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then((data) => setPeriodData(data))
      .catch((error) => console.error("Error fetching period data:", error));
  }, []);

  async function handleRecalculate() {
    try {
      const response = await fetch("http://localhost:5000/calculate", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        window.location = "/tracker/calculate";
      } else {
        console.log("error", response);
      }
    } catch (err) {
      console.error("Error recalculating next cycle:", err);
    }
  }
  return (
    <>
      <Header />
      <main className="w-[80%] mx-auto p-10">
        <PeriodStatus periodData={periodData} />
        <PeriodDatas periodData={periodData} />
        <PeriodCycles periodData={periodData} />
        <button
          className="text-white bg-primary500 text-base px-6 py-3 rounded-md"
          onClick={handleRecalculate}
        >
          Re-calculate
        </button>
      </main>
      <Footer />
    </>
  );
}
