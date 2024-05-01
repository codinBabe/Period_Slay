import React from "react";
export default function PeriodStatus({ periodData }) {
  function getCurrentStatus(periodData) {
    const today = new Date();
    const ovulationDate = new Date(periodData[0]?.ovulationDate);
    const nextPeriodDate = new Date(periodData[0]?.nextPeriodDate);

    const fertileWindowStart = new Date(ovulationDate);
    fertileWindowStart.setDate(fertileWindowStart.getDate() - 3);
    const fertileWindowEnd = new Date(ovulationDate);
    fertileWindowEnd.setDate(fertileWindowEnd.getDate() + 3);

    if (today >= fertileWindowStart && today <= fertileWindowEnd) {
      return "ovulating";
    } else if (today >= nextPeriodDate) {
      return "menstruating";
    } else {
      return "safe";
    }
  }
  return (
    <section className="text-center font-DmSerif text-[46px] bg-primary500 text-white mb-8 rounded-md p-1">
      <h1>
        Yayy! You are in your <span>{getCurrentStatus(periodData)}</span> period
      </h1>
    </section>
  );
}
