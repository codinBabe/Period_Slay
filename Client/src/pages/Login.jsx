import { React, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Slogan from "../components/Slogan";
import UterusFull from "../assets/UterusFull.png";
import Google from "../assets/google-login.svg";
import Facebook from "../assets/facebook-login.svg";
import Apple from "../assets/apple-login.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  }
  return (
    <>
      <Header />
      <main className="bg-primary50 relative">
        <div className="container mx-auto py-20 relative">
          <div className="max-w-3xl w-1/2 px-4 relative z-10">
            <div className="bg-white rounded-xl p-12 shadow-2xl transform translate-x-[73%]">
              <h1 className="font-DmSerif text-6xl text-center">Log In</h1>
              <form className="form" onSubmit={handleLogin}>
                <div className="mb-6">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Link to="/forget" className="block text-xl mb-6 text-right">
                  Forgot password?
                </Link>
                <button
                  className="rounded-md px-8 py-4 w-full text-white text-lg font-medium bg-primary500 mb-6"
                  type="submit"
                >
                  Log In
                </button>
              </form>
              <div className="text-center">
                <p className="text-xl">Or log in via:</p>
                <div className="login-icon flex items-center justify-evenly my-10">
                  <button>
                    <img src={Apple} alt="icon" />
                  </button>
                  <button>
                    <img src={Google} alt="icon" />
                  </button>
                  <button>
                    <img src={Facebook} alt="icon" />
                  </button>
                </div>
                <p className="text-xl">
                  Don’t have an account yet?{" "}
                  <Link className="text-primary500" to="/signup">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-[14%] left-[28%] transform -translate-x-1/2">
            <Slogan />
            <div className="relative">
              <img
                src={UterusFull}
                alt="placeholder"
                className="mt-[-5px] ml-[-48px] h-[300px] w-[300px]"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
