import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Womanwithafro from "../assets/woman-with-afro.png";
import WomanExercise from "../assets/woman_exercising.png";
import PeriodCalender from "../assets/period calendar.png";
import UterusPic from "../assets/uterus.png";
import HomeIcon from "../assets/home-icon.svg";
import HomeIcon1 from "../assets/home-icon-1.svg";
import HomeIcon2 from "../assets/home-icon-2.svg";
import HomeIcon4 from "../assets/home-icon-4.svg";
import HomeIcon5 from "../assets/home-icon-5.svg";
import HomeIcon6 from "../assets/home-icon-6.svg";
import Newsletter from "../components/Newsletter";
import PlaceholderImage from '../assets/Placeholder Image.png';
import { Link } from "react-router-dom";
import MyModal from "../components/Modal";
import InfoSection from "../components/InfoSection";
export default function Home() {
  const [modalOpen, setModalOpen] = useState(true);
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  return (
    <>
      <Header />
      <MyModal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        isAuthenticated={isAuthenticated}
      />

      <main>
        <section className="hero bg-primary500 text-white">
          <div className="container mx-auto py-28">
            <div className="relative">
              <div className="w-[853px] h-[299px]">
                <h1 className="font-DmSerif text-[46px] mb-6">
                  Learn More About Your Menstrual Health and Stay Updated on
                  Your Cycle
                </h1>
                <p className="w-[718px] h-[59px] text-xl mb-10">
                  Welcome to Period Slayer, where you can access educational
                  resources on puberty, learn more about your monthly period,
                  and other health issues.
                </p>
                <Link
                  to={"/"}
                  className="bg-white text-xl font-medium text-primary500 py-4 px-8 rounded-md"
                >
                  Learn More...
                </Link>
              </div>
              <div className="absolute right-[-96px] top-[-39%]">
                <img
                  src={Womanwithafro}
                  alt="woman with afro hairstyle"
                  style={{
                    width: "97%",
                    height: "97%",
                  }}
                />
              </div>
            </div>
          </div>
        </section>


        <InfoSection />
        <section>
          <div className="container mx-auto">
            <h2 className="font-DmSerif text-5xl text-primary500">
              Stay Informed, Stay Healthy
            </h2>
            <p className="text-3xl">
              Discover informative and engaging blog posts on various health
              topics.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col gap-2 ">
                <div>
                  <img src={WomanExercise} alt="placeholder" />
                </div>
                <p className="font-semibold text-sm">Health</p>
                <div>
                  <h3 className="font-DmSerif text-2xl mb-3">
                    The Role of Exercise in Menstrual Health: Benefits and Best
                    Practices
                  </h3>
                  <p className="text-base">
                    Learn how to prioritize self care during your menstrual
                    <br /> cycle for better well-being
                  </p>
                </div>
                <div className="flex item-center gap-4">
                  <div className="bg-neutral200 w-12 h-12 rounded-full"></div>
                  <div>
                    <p className="font-medium text-xl">Jane Doe</p>
                    <time className="flex items-center gap-2 text-neutral700 text-sm">
                      <span>11 Jan 2022</span>
                      <div className="bg-neutral700 w-2 h-2"></div>
                      <span> 5mins read</span>
                    </time>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <div>
                  <img src={WomanExercise} alt="placeholder" />
                </div>
                <p className="font-semibold text-sm">Health</p>
                <div>
                  <h3 className="font-DmSerif text-2xl mb-3">
                    The Role of Exercise in Menstrual Health: Benefits and Best
                    Practices
                  </h3>
                  <p className="text-base">
                    Learn how to prioritize self care during your menstrual
                    <br /> cycle for better well-being
                  </p>
                </div>
                <div className="flex item-center gap-4">
                  <div className="bg-neutral200 w-12 h-12 rounded-full"></div>
                  <div>
                    <p className="font-medium text-xl">Jane Doe</p>
                    <time className="flex items-center gap-2 text-neutral700 text-sm">
                      <span>11 Jan 2022</span>
                      <div className="bg-neutral700 w-2 h-2"></div>
                      <span> 5mins read</span>
                    </time>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <div>
                  <img src={WomanExercise} alt="placeholder" />
                </div>
                <p className="font-semibold text-sm">Health</p>
                <div>
                  <h3 className="font-DmSerif text-2xl mb-3">
                    The Role of Exercise in Menstrual Health: Benefits and Best
                    Practices
                  </h3>
                  <p className="text-base">
                    Learn how to prioritize self care during your menstrual
                    <br /> cycle for better well-being
                  </p>
                </div>
                <div className="flex item-center gap-4">
                  <div className="bg-neutral200 w-12 h-12 rounded-full"></div>
                  <div>
                    <p className="font-medium text-xl">Jane Doe</p>
                    <time className="flex items-center gap-2 text-neutral700 text-sm">
                      <span>11 Jan 2022</span>
                      <div className="bg-neutral700 w-2 h-2"></div>
                      <span> 5mins read</span>
                    </time>
                  </div>
                </div>
              </div>
            </div>
            <Link
              to={"/blog"}
              className="flex justify-end text-xl font-medium text-primary500 mt-8"
            >
              Check out more related &gt;{" "}
            </Link>
          </div>
        </section>
        <section className="my-12">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-DmSerif text-primary500 text-5xl mb-5">
                  Stay in control of your <br /> menstrual cycle
                </h2>
                <p className="text-lg mb-5">
                  Our period tracker helps you effortlessly monitor your
                  menstrual cycle, predict
                  <br /> your next period, and understand your body better. With
                  intuitive features and
                  <br /> easy-to-use interface, staying on top of your cycle has
                  never been easier.
                </p>
                <Link to={"/tracker"} className="text-lg font-medium">
                  LEARN MORE &gt;
                </Link>
              </div>
              <div>
                <img src={PeriodCalender} alt="period calendar" />
              </div>
            </div>
          </div>
        </section>
        <section className="mb-40">
          <div className="container mx-auto">
            <div>
              <h2 className="font-DmSerif text-primary500 text-5xl">
                Unlock Your Full Potential with Our Suite of
                <br /> Empowering Features
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-5 my-10">
              <div className="left">
                <div className="flex gap-6 mb-6">
                  <img className="self-start" src={HomeIcon1} alt="icon" />
                  <div>
                    <h3 className="font-DmSerif text-primary500 text-2xl mb-4">
                      Health Insights
                    </h3>
                    <p className="text-base">
                      Receive personalized health insights based on your cycle
                      data and symptoms. Our algorithm analyzes your information
                      to provide tailored recommendations for optimizing your
                      menstrual health and well-being.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 mb-6">
                  <img className="self-start" src={HomeIcon} alt="icon" />
                  <div>
                    <h3 className="font-DmSerif text-primary500 text-2xl mb-4">
                      Customizable Reminders
                    </h3>
                    <p className="text-base">
                      Discover Stay on top of your menstrual health with
                      customizable reminders for upcoming periods, ovulation,
                      and other cycle-related events. Never miss an important
                      milestone again!the changes your body goes through during
                      puberty and how to navigate them.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <img className="self-start" src={HomeIcon2} alt="icon" />
                  <div>
                    <h3 className="font-DmSerif text-primary500 text-2xl mb-4">
                      Intuitive Period Tracking
                    </h3>
                    <p className="text-base">
                      Easily track your menstrual cycle with our user-friendly
                      interface. Input your period start and end dates, track
                      symptoms, and receive personalized insights into your
                      cycle patterns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="center">
                <img src={UterusPic} alt="placeholder" />
              </div>
              <div className="right">
                <div className="flex gap-6 mb-6">
                  <img className="self-start" src={HomeIcon6} alt="icon" />
                  <div>
                    <h3 className="font-DmSerif text-primary500 text-2xl mb-4">
                      Cycle History
                    </h3>
                    <p className="text-base">
                      Access your complete cycle history to monitor trends and
                      track changes over time. Our comprehensive cycle history
                      feature provides a holistic view of your menstrual health
                      journey.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 mb-6">
                  <img className="self-start" src={HomeIcon5} alt="icon" />
                  <div>
                    <h3 className="font-DmSerif text-primary500 text-2xl mb-4">
                      Educational Blog
                    </h3>
                    <p className="text-base">
                      Explore our extensive library of articles covering
                      puberty, menstrual health, sexual wellness, contraception,
                      and more. Our informative content is curated by experts
                      and tailored to address common questions and concerns.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <img className="self-start" src={HomeIcon4} alt="icon" />
                  <div>
                    <h3 className="font-DmSerif text-primary500 text-2xl mb-4">
                      Privacy and Security
                    </h3>
                    <p className="text-base">
                      Rest assured that your data is safe and secure with Period
                      Slayer. We prioritize user privacy and adhere to strict
                      security protocols to protect your sensitive information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
