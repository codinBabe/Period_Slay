import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Womanwithafro from "../assets/woman-with-afro.png";
import PeriodCalender from "../assets/period calendar.png";
import UterusPic from "../assets/uterus.png";
import HomeIcon from "../assets/home-icon.svg";
import HomeIcon1 from "../assets/home-icon-1.svg";
import HomeIcon2 from "../assets/home-icon-2.svg";
import HomeIcon4 from "../assets/home-icon-4.svg";
import HomeIcon5 from "../assets/home-icon-5.svg";
import HomeIcon6 from "../assets/home-icon-6.svg";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
import MyModal from "../components/Modal";
import InfoSection from "../components/InfoSection";
import BlogCard from "../components/BlogCard";
import InfoCard from "../components/InfoCard";
export default function Home() {
  const [modalOpen, setModalOpen] = useState(true);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/blog").then((res) => {
      res.json().then((blog) => setBlog(blog));
    });
  }, []);

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
          <div className="container mx-auto px-5 py-5 md:px-0 md:py-28">
            <div className="text-center md:text-left relative">
              <div className="md:w-[853px] md:h-[299px]">
                <h1 className="font-DmSerif text-[30px] md:text-[46px] mb-6">
                  Learn More About Your Menstrual Health and Stay Updated on
                  Your Cycle
                </h1>
                <p className="md:w-[718px] md:h-[59px] text-base md:text-xl mb-10">
                  Welcome to Period Slayer, where you can access educational
                  resources on puberty, learn more about your monthly period,
                  and other health issues.
                </p>
                <Link
                  to={"/"}
                  className="bg-white text-base py-2 px-6 font-medium text-primary500 md:py-4 md:px-8 md:text-xl rounded-md"
                >
                  Learn More...
                </Link>
              </div>
              <div className="hidden md:block absolute right-[-96px] top-[-39%]">
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
          <div className="w-[90%] mx-auto">
            <h2 className="font-DmSerif text-3xl md:text-5xl text-primary500 mb-5">
              Stay Informed, Stay Healthy
            </h2>
            <p className="text-xl md:text-3xl mb-5">
              Discover informative and engaging blog posts on various health
              topics.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {blog &&
                blog
                  .slice(0, 3)
                  .map((item, i) => (
                    <BlogCard
                      key={i}
                      id={item._id}
                      poster={item.poster}
                      author={item.author}
                      category={item.categories}
                      introduction={item.introduction}
                      datePublished={item.datePublished}
                    />
                  ))}
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
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="font-DmSerif text-primary500 text-3xl md:text-5xl mb-5">
                  Stay in control of your <br /> menstrual cycle
                </h2>
                <p className="text-base md:text-lg mb-5">
                  Our period tracker helps you effortlessly monitor your
                  menstrual cycle, predict
                  <br /> your next period, and understand your body better. With
                  intuitive features and
                  <br /> easy-to-use interface, staying on top of your cycle has
                  never been easier.
                </p>
                <Link
                  to={"/tracker"}
                  className="textbase md:text-lg font-medium"
                >
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
          <div className="w-[90%] mx-auto">
            <div>
              <h2 className="font-DmSerif text-primary500 text-3xl md:text-5xl">
                Unlock Your Full Potential with Our Suite of
                <br /> Empowering Features
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 my-10">
              <div className="left">
                <InfoCard image={HomeIcon1} title={"Health Insights"}>
                  Receive personalized health insights based on your cycle data
                  and symptoms. Our algorithm analyzes your information to
                  provide tailored recommendations for optimizing your menstrual
                  health and well-being.
                </InfoCard>
                <InfoCard image={HomeIcon} title={"Customizable Reminders"}>
                  Discover Stay on top of your menstrual health with
                  customizable reminders for upcoming periods, ovulation, and
                  other cycle-related events. Never miss an important milestone
                  again!the changes your body goes through during puberty and
                  how to navigate them.
                </InfoCard>
                <InfoCard image={HomeIcon2} title={"Intuitive Period Tracking"}>
                  Easily track your menstrual cycle with our user-friendly
                  interface. Input your period start and end dates, track
                  symptoms, and receive personalized insights into your cycle
                  patterns.
                </InfoCard>
              </div>
              <div className="center">
                <img src={UterusPic} alt="placeholder" />
              </div>
              <div className="right">
                <InfoCard image={HomeIcon6} title={"Cycle History"}>
                  Access your complete cycle history to monitor trends and track
                  changes over time. Our comprehensive cycle history feature
                  provides a holistic view of your menstrual health journey.
                </InfoCard>
                <InfoCard image={HomeIcon5} title={"Educational Blog"}>
                  Explore our extensive library of articles covering puberty,
                  menstrual health, sexual wellness, contraception, and more.
                  Our informative content is curated by experts and tailored to
                  address common questions and concerns.
                </InfoCard>
                <InfoCard image={HomeIcon4} title={"Privacy and Security"}>
                  Rest assured that your data is safe and secure with Period
                  Slayer. We prioritize user privacy and adhere to strict
                  security protocols to protect your sensitive information.
                </InfoCard>
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
