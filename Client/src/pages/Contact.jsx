import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="w-[90%] mx-auto my-14">
          <div className="flex flex-col items-center justify-center gap-12">
            <div className="text-center md:w-[650px]">
              <h1 className="font-DmSerif text-[40px] md:text-[52px] mb-2">
                Get in touch with us for more information
              </h1>
              <p className="font-semibold text-2xl">
                If you need help or have a question, we are here for you
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[130px]">
              <div className="bg-primary50 w-[100%] px-4 md:w-[470px] h-[300px] flex flex-col gap-8 md:gap-12 items-center justify-center rounded-xl">
                <h2 className="font-semibold text-2xl">Chat Support</h2>
                <p className="text-xl">Our support team is just a click away</p>
                <Link
                  className="border border-primary500 rounded-md text-primary500 text-lg font-medium py-4 px-8"
                  to="/contact/support"
                >
                  Chat Now
                </Link>
              </div>
              <div className="bg-primary50 w-[100%] px-4 md:w-[470px] h-[300px] flex flex-col gap-8 md:gap-12 items-center justify-center rounded-xl">
                <h2 className="font-semibold text-2xl">Email Support</h2>
                <p className="text-xl">
                  Send us an email and we will get back to you
                </p>
                <Link
                  className="border border-primary500 rounded-md text-primary500 text-lg font-medium py-4 px-8"
                  to="mailto:hello@periodslayer.com"
                >
                  Send Email
                </Link>
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
