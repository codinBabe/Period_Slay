import React from "react";

export default function PeriodCycles({ periodData }) {
  function calculateNextSixCycles(periodData) {
    const cycles = [];
    periodData?.forEach((data) => {
      const firstDayLastPeriod = new Date(data.lastPeriodDate);
      const averageCycleLength = data.periodCycle;

      for (let i = 0; i < 6; i++) {
        const nextPeriodDate = new Date(firstDayLastPeriod);
        nextPeriodDate.setDate(
          nextPeriodDate.getDate() + i * averageCycleLength
        );

        const ovulationDate = new Date(nextPeriodDate);
        ovulationDate.setDate(ovulationDate.getDate() - 14);

        const safeWindow1Start = new Date(ovulationDate);
        safeWindow1Start.setDate(safeWindow1Start.getDate() - 11);
        const safeWindow1End = new Date(ovulationDate);
        safeWindow1End.setDate(safeWindow1End.getDate() - 3);

        const safeWindow2Start = new Date(ovulationDate);
        safeWindow2Start.setDate(safeWindow2Start.getDate() + 3);
        const safeWindow2End = new Date(nextPeriodDate);
        safeWindow2End.setDate(safeWindow2End.getDate() + 11); // 14 days after ovulation + 3 days = 17 days

        cycles.push({
          periodDate: formatDateMonthOnly(nextPeriodDate),
          ovulationDate: formatDateMonthOnly(ovulationDate),
          safeWindow1: `${formatDateMonthOnly(
            safeWindow1Start
          )} - ${formatDateMonthOnly(safeWindow1End)}`,
          safeWindow2: `${formatDateMonthOnly(
            safeWindow2Start
          )} - ${formatDateMonthOnly(safeWindow2End)}`,
        });
      }
    });

    return cycles;
  }

  function formatDateMonthOnly(dateString) {
    const options = { month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <section className="my-10 shadow-lg">
      <div>
        <h1 className="font-DmSerif text-[29px] bg-primary500 p-4 text-white">
          Estimations for the Next 6 Cycles
        </h1>
        <div className="">
          <div className="flex items-center justify-between bg-primary50 text-primary500 p-5">
            <h3 className="text-xl font-medium">Period Start</h3>
            <h3 className="text-xl font-medium">Ovulation Window</h3>
            <h3 className="text-xl font-medium">Safe Period</h3>
          </div>
          {calculateNextSixCycles(periodData).map((cycle, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-primary500 border-b-2 border-primary500 p-5"
            >
              <p>{cycle?.periodDate}</p>
              <p>{cycle?.ovulationDate}</p>
              <p>{cycle?.safeWindow2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
