import React from "react";
import PeriodInfoCard from "./PeriodInfoCard";

export default function PeriodDatas({ periodData }) {
  function calculatePeriodRanges(ovulationDate) {
    const fertileWindowStart = new Date(ovulationDate);
    fertileWindowStart.setDate(fertileWindowStart.getDate() - 3);
    const fertileWindowEnd = new Date(ovulationDate);
    fertileWindowEnd.setDate(fertileWindowEnd.getDate() + 3);

    const safeWindow1Start = new Date(fertileWindowStart);
    safeWindow1Start.setDate(safeWindow1Start.getDate() - 11); // 14 days before ovulation - 3 days = 11 days
    const safeWindow1End = new Date(fertileWindowStart);

    const safeWindow2Start = new Date(fertileWindowEnd);
    const safeWindow2End = new Date(safeWindow2Start);
    safeWindow2End.setDate(safeWindow2End.getDate() + 11);

    return {
      fertileWindow: `${formatDateRange(fertileWindowStart, fertileWindowEnd)}`,
      safeWindow1: `${formatDateRange(safeWindow1Start, safeWindow1End)}`,
      safeWindow2: `${formatDateRange(safeWindow2Start, safeWindow2End)}`,
    };
  }

  function formatDateRange(startDate, endDate) {
    const startMonth = startDate.toLocaleDateString("en-US", { month: "long" });
    const startDay = startDate.getDate();
    const endMonth = endDate.toLocaleDateString("en-US", { month: "long" });
    const endDay = endDate.getDate();
    const year = endDate.getFullYear();
    if (startMonth === endMonth) {
      return `${startMonth} ${startDay} - ${endDay}, ${year}`;
    } else {
      return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
    }
  }

  function formatDate(dateString) {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <section className="bg-primary10 rounded-xl py-12">
      <div className="flex items-center justify-between text-primary500 font-medium border-b-2 border-primary500 mb-12">
        <div className="flex flex-col gap-1 ml-6 mb-6">
          <h3 className="font-DmSerif">Next Period Date</h3>
          <p>
            {periodData.length > 0 && formatDate(periodData[0].nextPeriodDate)}
          </p>
        </div>
        <div className="flex flex-col gap-1 mr-6 mb-6">
          <div className="flex items-center gap-2">
            <h3>Last Period date:</h3>
            <p>
              {periodData.length > 0 &&
                formatDate(periodData[0].lastPeriodDate)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h3>Cycle Length:</h3>
            <p>{periodData.length > 0 && periodData[0].periodCycle}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <PeriodInfoCard
          date={
            periodData.length > 0 &&
            calculatePeriodRanges(periodData[0].ovulationDate).fertileWindow
          }
          type={"Fertile Window"}
        >
          The fertile window is the timeframe during a woman's menstrual cycle
          when she is most likely to conceive, typically spanning several days
          leading up to and including ovulation.
        </PeriodInfoCard>
        <PeriodInfoCard
          date={`${
            periodData.length > 0 && formatDate(periodData[0].ovulationDate)
          }`}
          type={"Ovulation Date"}
        >
          The is the point in the menstrual cycle when an egg is released from
          the ovary, typically occurring around the middle of the cycle, which
          marks the peak of fertility for conception.
        </PeriodInfoCard>
        <PeriodInfoCard
          date={`${
            periodData.length > 0 && formatDate(periodData[0].nextPeriodDate)
          }`}
          type={"Next Period Date"}
        >
          This is the anticipated date when a person's next menstrual period is
          expected to begin based on their menstrual cycle length and the timing
          of their previous periods.
        </PeriodInfoCard>
        <PeriodInfoCard
          date={
            periodData.length > 0 &&
            calculatePeriodRanges(periodData[0].ovulationDate).safeWindow2
          }
          type={"Safe Period"}
        >
          The safe period is the phase of a menstrual cycle during which
          conception is less likely to occur, typically occurring several days
          before and after ovulation.
        </PeriodInfoCard>
        <PeriodInfoCard
          date={
            periodData.length > 0 &&
            calculatePeriodRanges(periodData[0].ovulationDate).fertileWindow
          }
          type={"Fertile Window"}
        >
          The fertile window is the timeframe during a woman's menstrual cycle
          when she is most likely to conceive, typically spanning several days
          leading up to and including ovulation.
        </PeriodInfoCard>
        <PeriodInfoCard
          date={
            periodData.length > 0 &&
            calculatePeriodRanges(periodData[0].ovulationDate).fertileWindow
          }
          type={"Fertile Window"}
        >
          The fertile window is the timeframe during a woman's menstrual cycle
          when she is most likely to conceive, typically spanning several days
          leading up to and including ovulation.
        </PeriodInfoCard>
      </div>
    </section>
  );
}
