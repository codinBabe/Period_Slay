import { React, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Slogan from "../components/Slogan";
import UterusFull from "../assets/UterusFull.png";
import Google from "../assets/google-login.svg";
import Facebook from "../assets/facebook-login.svg";
import SuccessIcon from "../assets/success-icon.png";
import FailIcon from "../assets/fail-icon.png";
import Apple from "../assets/apple-login.svg";
import EyeIcon from "../assets/eyeIcon.svg";
import EyeSlashIcon from "../assets/eyeSlash.svg";
import Notification from "../components/Notify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoginInProgress(true);
    try {
      const response = await fetch("https://period-slay.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setIsSuccess(true);
      } else {
        setIsFail(true);
      }
      setLoginInProgress(false);
    } catch (error) {
      console.error("Login error:", error);
    }
  }
  return (
    <>
      <Header />
      <main className="bg-primary50 relative">
        <div className="w-[90%] mx-auto py-20 relative">
          <div className="max-w-3xl w-full md:w-[40%] px-4 relative z-10">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl transform translate-x-[50] md:translate-x-[110%]">
              <h1 className="font-DmSerif text-6xl text-center">Log In</h1>
              <form className="form" onSubmit={handleLogin}>
                <div className="mb-6">
                  <label htmlFor="email">
                    Email
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loginInProgress}
                      className=" border-primary500"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="relative" htmlFor="password">
                    Password
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loginInProgress}
                      className=" border-primary500"
                    />
                    <button
                      type="button"
                      className="absolute top-7 right-2 px-3 py-2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <img src={EyeSlashIcon} alt="Hide Password" />
                      ) : (
                        <img src={EyeIcon} alt="Show Password" />
                      )}
                    </button>
                  </label>
                </div>
                <Link to="/forget" className="block text-xl mb-6 text-right">
                  Forgot password?
                </Link>
                <button
                  className="rounded-md px-8 py-4 w-full text-white text-lg font-medium bg-primary500 mb-6"
                  type="submit"
                  disabled={loginInProgress}
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
          <div className="hidden md:block absolute top-[13%] left-[34%] transform -translate-x-1/2">
            <Slogan />
            <div className="relative">
              <img
                src={UterusFull}
                alt="placeholder"
                className="mt-[-60px] ml-[-15px] h-[310px] w-[310px]"
              />
            </div>
          </div>
          {isSuccess && (
            <Notification
              imgSrc={SuccessIcon}
              LinkText={"Proceed to Homepage"}
              route={"/"}
            >
              <p className="font-medium mb-10">Logged in successfully</p>
              <p>Now let’s explore Period Slay</p>
            </Notification>
          )}
          {isFail && (
            <Notification
              imgSrc={FailIcon}
              LinkText={"Try Again"}
              route={"/login"}
            >
              <p className="font-medium mb-10">Opps!</p>
              <p>Something went wrong. Please try again.</p>
            </Notification>
          )}
        </div>
      </main>
    </>
  );
}
