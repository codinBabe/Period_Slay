import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutImage from "../assets/About-Image.svg";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instagram.svg";
import X from "../assets/X.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Youtube from "../assets/Youtube.svg";
import meeting from "../assets/meeting.svg";
import CallIcon from "../assets/call-icon.svg";
import Mail from "../assets/mail-icon.svg";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="relative">
            <div>
              <img src={AboutImage} alt="placeholder" />
            </div>
            <h1 className="font-DmSerif text-primary500 md:text-[52px] md:w-[478px] w-[60%] absolute top-[20px] md:top-[120px] md:left-[100px] left-[10px]">
              Learn About Period Slayer's Mission and Impact.
            </h1>
          </div>
        </section>
        <section className="w-[90%] mx-auto my-14">
          <div className="">
            <div className="top grid md:grid-cols-4 gap-5">
              <div className="w-[300px] h-[300px] bg-primary10 rounded-tr-2xl rounded-br-2xl text-primary500">
                <div className="flex flex-col text-lg md:text-xl gap-5 ml-5 mt-4">
                  <h2 className="font-DmSerif text-[24px] md:text-[32px]">
                    About Us
                  </h2>
                  <p>Leadership</p>
                  <p>Awards and Recognition</p>
                  <p>What we do</p>
                  <p>Our Purpose</p>
                  <p>Our team</p>
                </div>
              </div>
              <div className="md:col-span-2 text-lg flex flex-col gap-4">
                <h2 className="font-DmSerif text-[24px] md:text-[32px] text-primary500">
                  WHO WE ARE
                </h2>
                <p>
                  Welcome to Period Slayer, where we're on a mission to empower
                  individuals and communities by breaking down barriers to
                  menstrual health and hygiene. We believe that everyone
                  deserves access to safe and dignified menstrual care,
                  regardless of their background or circumstances.
                </p>
                <p>
                  At Period Slayer, our mission is simple yet profound: to
                  eradicate menstrual poverty, promote menstrual health
                  education, and advocate for menstrual equity worldwide. We're
                  committed to ensuring that no one ever has to choose between
                  their health and other basic necessities.
                </p>
              </div>
              <div className="md:row-span-2 flex flex-col gap-4">
                <img src={meeting} alt="placeholder" />
                <h2 className="font-semibold text-primary500 text-2xl">
                  What We Do
                </h2>
                <p className="text-base">
                  Through strategic partnerships, grassroots initiatives, and
                  advocacy campaigns, we're working tirelessly to address the
                  systemic challenges surrounding menstrual health. From
                  distributing menstrual hygiene products to underserved
                  communities to providing comprehensive education on menstrual
                  hygiene management, our multifaceted approach aims to foster
                  positive change at both the individual and societal levels.
                </p>
              </div>

              <div className="middle md:grid-rows-2 md:mt-24">
                <h2 className="text-base font-medium mb-2">
                  Social Media links
                </h2>
                <div className="flex items-center gap-5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Facebook} alt="icon" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Instagram} alt="icon" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={X} alt="icon" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedIn} alt="icon" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Youtube} alt="icon" />
                  </a>
                </div>
              </div>
              <div className="middle md:grid-rows-2 md:col-span-2 bg-neutral text-base mt-8 md:mt-16">
                <h2 className="font-semibold text-primary500 text-2xl mb-5">
                  Our Impact
                </h2>
                <p>
                  Since our inception, Period Slayer has touched the lives of
                  countless individuals around the globe. From marginalized
                  communities in remote villages to urban centers facing
                  economic hardship, we've made it our mission to reach those
                  who need our support the most. By providing access to
                  menstrual products, promoting menstrual health education, and
                  challenging stigma and discrimination, we're creating a world
                  where menstruation is no longer a barrier to health, dignity,
                  and opportunity.
                </p>
              </div>
            </div>
            <div className="bottom grid md:grid-cols-4 gap-5 mt-14">
              <div className="col-span-3 bg-neutral text-base">
                <h2 className="font-semibold text-primary500 text-2xl mb-5">
                  Our Mission
                </h2>
                <p>
                  Since our inception, Period Slayer has touched the lives of
                  countless individuals around the globe. From marginalized
                  communities in remote villages to urban centers facing
                  economic hardship, we've made it our mission to reach those
                  who need our support the most. By providing access to
                  menstrual products, promoting menstrual health education, and
                  challenging stigma and discrimination, we're creating a world
                  where menstruation is no longer a barrier to health, dignity,
                  and opportunity.
                </p>
              </div>
              <div className="w-[300px] h-[400px] md:row-span-2 bg-primary500 rounded-[10px] text-white">
                <div className="flex flex-col gap-4 ml-5 mt-[140px] md:mt-[100px]">
                  <h2 className="font-DmSerif text-[25px] md:text-[41px]">
                    Get in Touch With Us
                  </h2>
                  <div className="flex items-center gap-3">
                    <img src={CallIcon} alt="icon" />
                    <p>+234-785-9870</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src={Mail} alt="icon" />
                    <p>hello@periodslayer.com</p>
                  </div>
                </div>
              </div>
              <div className="grid-rows-2 col-span-3 bg-neutral text-base mt-8">
                <h2 className="font-semibold text-primary500 text-2xl mb-5">
                  Our Vision
                </h2>
                <p>
                  Since our inception, Period Slayer has touched the lives of
                  countless individuals around the globe. From marginalized
                  communities in remote villages to urban centers facing
                  economic hardship, we've made it our mission to reach those
                  who need our support the most. By providing access to
                  menstrual products, promoting menstrual health education, and
                  challenging stigma and discrimination, we're creating a world
                  where menstruation is no longer a barrier to health, dignity,
                  and opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
