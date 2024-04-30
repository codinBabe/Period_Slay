import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calculate1 from "../assets/calculate1.png";
import Calculate2 from "../assets/calculate2.png";
export default function TrackerCalculator() {
  const [firstDayLastPeriod, setFirstDayLastPeriod] = useState("");
  const [averageCycleLength, setAverageCycleLength] = useState("");
  const [lastPeriodDuration, setLastPeriodDuration] = useState("");
  const [periods, setPeriods] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    if (averageCycleLength < 21 || averageCycleLength > 35) {
      alert("Average cycle length should be between 21 and 35 days.");
      return;
    }

    if (lastPeriodDuration < 2 || lastPeriodDuration > 7) {
      alert("Last period duration should be between 2 and 7 days.");
      return;
    }
    try {
      const response = await fetch("/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstDayLastPeriod,
          averageCycleLength,
          lastPeriodDuration,
        }),
      });
      const data = await response.json();
      console.log(data);
      setPeriods(data);
    } catch (err) {
      console.error("Error calculating:", err);
    }
  }
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="w-[90%] mx-auto p-10">
            <div className="flex items-center gap-10">
              <div>
                <img src={Calculate2} alt="placeholder" />
              </div>
              <div className="w-[620px]">
                <h1 className="font-DmSerif text-[52px] mb-5">
                  Period Tracker & Calculator
                </h1>
                <p className="text-xl">
                  Take Charge of Your Menstrual Health with Period Slayer's
                  Innovative Tracker and Calculator. Stay Informed, Plan Ahead,
                  and Empower Yourself Every Step of the Way!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-[90%] mx-auto px-12 mb-14">
            <div className="flex items-start">
              <div className="w-[641px] bg-primary500 text-white p-[41px] flex flex-col gap-8">
                <h2 className="font-DmSerif text-[36px]">Track Your Period</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    First day of your Last Period
                    <input
                      type="date"
                      value={firstDayLastPeriod}
                      onChange={(e) => setFirstDayLastPeriod(e.target.value)}
                    />
                  </label>
                  <label>
                    Average Cycle’s Length
                    <input
                      type="number"
                      value={averageCycleLength}
                      onChange={(e) => setAverageCycleLength(e.target.value)}
                      placeholder="28 days"
                    />
                  </label>
                  <label>
                    How long did it last?
                    <input
                      type="number"
                      value={lastPeriodDuration}
                      onChange={(e) => setLastPeriodDuration(e.target.value)}
                      placeholder="3 days"
                    />
                  </label>
                  <div className="flex items-center gap-8 mt-10 text-lg font-medium">
                    <button
                      className="text-primary500 py-3 px-6 bg-white rounded-md"
                      type="submit"
                    >
                      Proceed to Calculate
                    </button>
                    <button
                      className="text-white border border-white py-3 px-14 rounded-md"
                      type="reset"
                    >
                      Reset
                    </button>
                  </div>
                </form>
                <p className="text-base">
                  Cycle length refers to the duration of a complete menstrual
                  cycle, typically measured from the first day of one menstrual
                  period to the first day of the next menstrual period. The
                  average menstrual cycle length is often considered to be
                  around 28 days, but cycles can range anywhere from 21 to 35
                  days or longer.
                </p>
              </div>
              <div>
                <img src={Calculate1} alt="placeholder" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
