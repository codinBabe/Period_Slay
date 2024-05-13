import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Calculate1 from "../assets/calculate1.png";
import Calculate2 from "../assets/calculate2.png";
export default function TrackerCalculator() {
  const [firstDayLastPeriod, setFirstDayLastPeriod] = useState("");
  const [averageCycleLength, setAverageCycleLength] = useState("");
  const [lastPeriodDuration, setLastPeriodDuration] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    if (averageCycleLength < 21 || averageCycleLength > 35) {
      alert("Average cycle length should be between 21 and 35 days.");
      return;
    }

    if (lastPeriodDuration < 2 || lastPeriodDuration > 7) {
      alert("Last period duration should be between 2 and 7 days.");
      return;
    }
    try {
      const response = await fetch(
        "https://period-slay.onrender.com/calculate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            firstDayLastPeriod,
            averageCycleLength,
            lastPeriodDuration,
          }),
        }
      );
      if (response.status === 409) {
        alert(
          "You have already filled the form. Click 'Reset' to delete previous data."
        );
        return;
      }
      if (response.ok) {
        window.location = "/tracker/period";
      } else {
        console.log("error", response);
      }
      setIsSubmitting(false);
    } catch (err) {
      console.error("Error calculating next cycle:", err);
    }
  }
  async function handleReset() {
    try {
      const response = await fetch(
        "https://period-slay.onrender.com/calculate",
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        alert(
          "Previous data deleted. You can now refresh and fill the form again"
        );
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
      <main>
        <section>
          <div className="w-[90%] mx-auto p-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div>
                <img src={Calculate2} alt="placeholder" />
              </div>
              <div className="md:w-[620px]">
                <h1 className="font-DmSerif text-[36px] md:text-[52px] mb-5">
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
          <div className="w-[90%] mx-auto md:px-12 mb-14">
            <div className="w-full h-auto flex flex-col md:flex-row items-start">
              <div className="md:w-[650px] h-[650px] bg-primary500 text-white p-5 md:p-[41px] flex flex-col gap-8">
                <h2 className="font-DmSerif text-[36px]">Track Your Period</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    First day of your Last Period
                    <input
                      type="date"
                      value={firstDayLastPeriod}
                      onChange={(e) => setFirstDayLastPeriod(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </label>
                  <label>
                    Average Cycle’s Length
                    <input
                      type="number"
                      value={averageCycleLength}
                      onChange={(e) => setAverageCycleLength(e.target.value)}
                      placeholder="28 days"
                      disabled={isSubmitting}
                    />
                  </label>
                  <label>
                    How long did it last?
                    <input
                      type="number"
                      value={lastPeriodDuration}
                      onChange={(e) => setLastPeriodDuration(e.target.value)}
                      placeholder="3 days"
                      disabled={isSubmitting}
                    />
                  </label>
                  <div className="flex items-center gap-8 mt-10  text-base md:text-lg font-medium">
                    <button
                      className="text-primary500 py-2 px-4 md:py-3 md:px-6 bg-white rounded-md"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Proceed to Calculate
                    </button>
                    <button
                      className="text-white border border-white py-2 px-4 md:py-3 md:px-14 rounded-md"
                      type="button"
                      onClick={handleReset}
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
              <div className="">
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
