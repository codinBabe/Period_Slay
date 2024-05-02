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
    fetch("https://period-slay.onrender.com/calculate", {
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

  function handleRecalculate() {
    window.location = "/calculate";
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
