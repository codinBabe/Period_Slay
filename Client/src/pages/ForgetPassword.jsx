import React from "react";
import { useState } from "react";
import Header from "../components/Header";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [resetInProgress, setResetInProgress] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  async function handlePasswordReset(e) {
    e.preventDefault();
    setResetInProgress(true);
    try {
      const response = await fetch("https://period-slay.onrender.com/forget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setEmailSent(true);
      }
      setResetInProgress(false);
    } catch (error) {
      console.error("Password reset error:", error);
    }
  }

  return (
    <>
      <Header />
      <main className="bg-primary50 flex flex-col items-center justify-center h-[90vh]">
        <h1 className="font-DmSerif text-2xl">Forgot Password</h1>
        <form onSubmit={handlePasswordReset}>
          <label htmlFor="email">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={resetInProgress}
            />
          </label>
          <button
            type="submit"
            className="rounded-md px-8 py-4 w-full text-white text-lg font-medium bg-primary500 mb-6"
            disabled={resetInProgress}
          >
            Reset Password
          </button>
        </form>
        {emailSent && <p>Check your email for a password reset link.</p>}
      </main>
    </>
  );
}
