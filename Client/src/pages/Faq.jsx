import Header from "../components/Header";
import Footer from "../components/Footer";
import cheveron from "../assets/cheveron-down.svg";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
import { faqList, faqs } from "../components/FaqUtils";
import { useState } from "react";
export default function Faq() {
  const [isExpanded, setIsExpanded] = useState([]);
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary500 text-white">
          <div className="w-[90%] mx-auto py-28 text-center md:text-left">
            <div className="md:w-[949px] h-[263] flex flex-col gap-5">
              <h1 className="font-DmSerif text-[46px]">
                Frequently Asked Questions
              </h1>
              <p className="text-xl">
                Find quick help and support for common inquiries about our
                website
              </p>
            </div>
          </div>
        </section>
        <section className="w-[90%] mx-auto my-16">
          <div>
            <h1 className="font-DmSerif text-[46px]">FAQs</h1>
            <p className="text-lg">
              Find answers to commonly asked questions about our website.
            </p>
          </div>
          {faqs.map((faq, i) => (
            <div key={i} className="my-8">
              <h2 className="font-DmSerif text-xl">{faq.question}</h2>
              <p className="text-base">{faq.answer}</p>
            </div>
          ))}
        </section>
        <section className="w-[90%] mx-auto my-16">
          {faqList.map((faq, i) => (
            <div key={i} className="my-8 border-black border-b-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                <img
                  src={cheveron}
                  alt="icon"
                  onClick={() => {
                    let newIsExpanded = [...isExpanded];
                    newIsExpanded[i] = !newIsExpanded[i];
                    setIsExpanded(newIsExpanded);
                  }}
                />
              </div>
              {isExpanded[i] && <p>{faq.answer}</p>}
            </div>
          ))}
        </section>
        <section className="w-[90%] mx-auto my-16">
          <div className="flex flex-col gap-5 justify-center">
            <h2 className="font-DmSerif text-[41px]">Still have questions?</h2>
            <p className="text-lg">
              Contact us for more information or assistance.
            </p>
            <Link
              to="/contact"
              className="w-[200px] text-center text-white bg-primary500 rounded-md py-4 px-8 font-medium text-lg"
            >
              Contact
            </Link>
          </div>
        </section>
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}
