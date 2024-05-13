import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    const recipientEmail = "hello@periodslayer.com";
    const mailtoUrl =
      "mailto:" +
      recipientEmail +
      "?subject=Newsletter Subscription&body=" +
      email;
    window.location = mailtoUrl;
  }
  return (
    <section className="bg-primary500 py-10 text-white">
      <div className="w-[90%] mx-auto">
        <h2 className="font-DmSerif text-3xl md:text-5xl mb-5">
          Stay Updated with our <br />
          Newsletter
        </h2>
        <p className="font-semibold  text-lg md:text-2xl">
          Subscribe to our newsletter for the latest blog posts & health tips
        </p>
        <form className="my-5" onSubmit={sendEmail}>
          <div className="flex flex-col md:flex-row md:w-1/2 items-center gap-4">
            <input
              type="text"
              placeholder="Your Email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black"
            />
            <button
              type="submit"
              className="w-1/2 py-2 px-8 text-lg font-medium bg-black rounded-md"
            >
              Get Updates
            </button>
          </div>
        </form>
        <p className="text-base">
          By subscribing, you agree to our terms and conditions
        </p>
      </div>
    </section>
  );
}
