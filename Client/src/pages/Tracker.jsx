import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Tracker1 from "../assets/tracker1.png";
import Tracker2 from "../assets/tracker2.png";
import Tracker3 from "../assets/tracker3.png";
import CircularArrow from "../assets/Circular Arrows.svg";
export default function PeriodTracker() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary500 text-white">
          <div className="container mx-auto py-20">
            <div className="w-[949px] h-[263] flex flex-col gap-5">
              <h1 className="font-DmSerif text-[41px]">
                Track Your Period with Ease and Stay Informed with Period
                Slayer.
              </h1>
              <p className="font-semibold text-2xl">
                Whether you're looking to track your periods, predict ovulation,
                or gain insights into your menstrual health, our intuitive
                tracker has you covered.
              </p>
              <Link className="text-medium text-xl" to={"/tracker/calculate"}>
                EXPLORE &gt;
              </Link>
            </div>
          </div>
        </section>
        <section className="p-20">
          <div className="flex items-center justify-between">
            <div className="w-[624px] flex flex-col gap-6">
              <h2 className="font-DmSerif text-[41px]">
                Track Your Menstrual Cycle and Predict Future Cycles with our
                Calculator.
              </h2>
              <p className="text-base">
                Our Calculator uses your menstrual cycle data to estimate your
                next cycle and determine your safe period.{" "}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-DmSerif text-2xl mb-5">Input Data</h3>
                  <p>
                    Easily record your period start and end dates, flow
                    intensity, and any symptoms.
                  </p>
                </div>
                <div>
                  <h3 className="font-DmSerif text-2xl mb-5">
                    Information Insights
                  </h3>
                  <p>
                    Get personalized insights into your cycle length, ovulation
                    period, and fertile window.
                  </p>
                </div>
              </div>
              <Link
                className="self-start text-lg bg-primary500 py-4 px-8 rounded-md font-medium text-white"
                to="/tracker/calculate"
              >
                Explore Now
              </Link>
            </div>
            <div className="right">
              <img src={Tracker1} alt="placeholder" />
            </div>
          </div>
        </section>
        <section className="p-20">
          <div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="w-[596px] font-DmSerif text-[46px]">
                Track your monthly period easily
              </h2>
              <div className="w-[596px]">
                <p className="text-xl mb-8">
                  Click link below now to access our comprehensive period
                  tracker and educational resources.
                </p>
                <Link
                  className="text-lg bg-primary500 py-4 px-8 rounded-md font-medium text-white"
                  to="/tracker/calculate"
                >
                  Calculate
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="left">
                <img src={Tracker2} alt="placeholder" />
              </div>
              <div className="w-[641px] flex flex-col gap-8">
                <h2 className="font-DmSerif text-[46px]">
                  Accurate Predictions and Personalized Health Insights for Your
                  Period
                </h2>
                <p>
                  Our period tracker provides accurate predictions and
                  personalized health insights to help you better understand
                  your menstrual cycle. With PeriodSlayer you can easily track
                  your period and receive valuable information about your
                  reproductive health.
                </p>
                <div className="flex items-center justify-evenly">
                  <div className="w-[295px]">
                    <img src={CircularArrow} alt="icon" />
                    <h3 className="font-bold text-xl my-4">
                      Accurate Predictions
                    </h3>
                    <p>
                      Our period tracker uses advanced algorithms to accurately
                      predict your menstrual cycle.
                    </p>
                  </div>
                  <div className="w-[295px]">
                    <img src={CircularArrow} alt="icon" />
                    <h3 className="font-bold text-xl my-4">
                      Personalized Insights
                    </h3>
                    <p>
                      Get personalized health insights based on your period data
                      and reproductive health information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-20">
          <h2 className="text-center bg-primary500 font-DmSerif text-[41px] text-white p-5">
            Menstrual Cycle Phases
          </h2>
          <div className="bg-primary10">
            <div className="grid grid-cols-3 py-10">
              <div className="flex flex-col justify-center gap-8">
                <div className="text-primary500 flex items-start justify-center gap-6">
                  <div className="w-6 h-6 bg-primary500 mt-1"></div>
                  <div className="w-[245px]">
                    <h3 className="text-2xl font-medium">Day 1-7</h3>
                    <p className="text-lg">
                      Uterus lining begins to break down and menstruation occurs
                    </p>
                  </div>
                </div>
                <div className="text-primary500 flex items-start justify-center gap-6">
                  <div className="w-6 h-6 bg-primary500 mt-1"></div>
                  <div className="w-[245px]">
                    <h3 className="text-2xl font-medium">Day 8-11</h3>
                    <p className="text-lg">
                      Lining of the womb starts to thickens in preparation for
                      egg
                    </p>
                  </div>
                </div>
                <div className="text-primary500 flex items-start justify-center gap-6">
                  <div className="w-6 h-6 bg-primary500 mt-1"></div>
                  <div className="w-[245px]">
                    <h3 className="text-2xl font-medium">Day 12-17</h3>
                    <p className="text-lg">Ovulation</p>
                  </div>
                </div>
              </div>
              <div className="center">
                <img src={Tracker3} alt="placeholder" />
              </div>
              <div className="flex flex-col justify-center gap-8">
                <div className="text-primary500 flex items-start justify-center gap-6">
                  <div className="w-6 h-6 bg-primary500 mt-1"></div>
                  <div className="w-[245px]">
                    <h3 className="text-2xl font-medium">Day 18-25</h3>
                    <p className="text-lg">
                      If fertilization has not occurred, the corpus luteum
                      (yellow body) feeds away
                    </p>
                  </div>
                </div>
                <div className="text-primary500 flex items-start justify-center gap-6">
                  <div className="w-6 h-6 bg-primary500 mt-1"></div>
                  <div className="w-[245px]">
                    <h3 className="text-2xl font-medium">Day 25-28</h3>
                    <p className="text-lg">
                      Uterine lining detaches and menstruation begins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
