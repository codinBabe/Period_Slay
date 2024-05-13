import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Submit from "../assets/submit-icon.svg";

export default function Support() {
  const [userInput, setUserInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [periodycle, setPeriodycle] = useState("");
  const [optionSelected, setOptionSelected] = useState(false);

  const options = [
    "Puberty & Hygiene",
    "Know your cycle length",
    "Menstruation and Mental Health",
    "Chat with an agent",
  ];

  function getGreeting() {
    const date = new Date();
    const hours = date.getHours();
    let greeting;

    if (hours < 12) {
      greeting = "Good morning";
    } else if (hours < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return greeting;
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location = "/login";
    } else {
      fetchUserDetails();
    }
  }, []);

  async function fetchUserDetails() {
    try {
      const response = await fetch("https://period-slay.onrender.com/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setFirstName(data.fullName.split(" ")[0]);
        setPeriodycle(data.periodCycle);
      } else {
        console.error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newUserMessage = { sender: "user", message: userInput };
    let newConversation = [...conversation, newUserMessage];
    setUserInput("");

    if (!optionSelected && !isNaN(userInput)) {
      setOptionSelected(true);
      return;
    }

    if (!optionSelected) {
      const optionsMessage = `Hello ${firstName}, please select one option:\n${options
        .map((option, index) => `${index + 1}. ${option}`)
        .join("\n")}`;
      newConversation = [
        ...newConversation,
        {
          sender: "bot",
          message: optionsMessage,
        },
      ];
      setConversation(newConversation);
      return;
    }

    if (!isNaN(userInput)) {
      const optionIndex = parseInt(userInput);
      if (optionIndex === 1 || optionIndex === 3) {
        newConversation = [
          ...newConversation,
          {
            sender: "bot",
            message: `You will be redirected to our blog page, to learn more.`,
          },
        ];
        setTimeout(() => {
          return newConversation;
        }, 5000 * 5000);
        window.location = "/blog";
      } else if (optionIndex === 2) {
        newConversation = [
          ...newConversation,
          {
            sender: "bot",
            message: `Your cycle length is ${periodycle} days.`,
          },
        ];
      } else if (optionIndex === 4) {
        newConversation = [
          ...newConversation,
          {
            sender: "bot",
            message: `${getGreeting()} ${firstName}, How may I help you?\n-Angela`,
          },
        ];
      } else {
        newConversation = [
          ...newConversation,
          {
            sender: "bot",
            message:
              "Invalid response. Please enter a number between 1 and " +
              options.length,
          },
        ];
      }
      setOptionSelected(true);
    }

    setConversation(newConversation);
  }

  return (
    <>
      <Header />
      <main>
        <section className="w-[90%] mx-auto my-14 border border-primary500 p-10">
          <div className="my-5">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-4 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <time>
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
                <p
                  className={`bg-primary50 rounded-[18px] text-xl mb-16 ${
                    msg.sender === "user"
                      ? "rounded-tr-none"
                      : "rounded-tl-none"
                  } p-6`}
                >
                  {msg.message.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="w-[60px] h-[60px] rounded-full bg-primary10"></div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="mt-40">
            <div className="relative">
              <div className="flex items-center gap-6 md:w-[90%] md:mx-auto">
                <input
                  type="text"
                  placeholder="Type something"
                  className="bg-primary50"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <div className="w-[60px] h-[60px] rounded-full bg-primary10"></div>
              </div>
              <button
                type="submit"
                className="absolute top-[18px] right-[30%] md:right-[12%]"
              >
                <img src={Submit} alt="icon" />
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
