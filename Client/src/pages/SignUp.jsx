import { React, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Slogan from "../components/Slogan";
import UterusFull from "../assets/UterusFull.png";
import SuccessIcon from "../assets/success-icon.png";
import FailIcon from "../assets/fail-icon.png";
import ValidationFeedback from "../components/Validation";
import Notification from "../components/Notify";
import EyeIcon from "../assets/eyeIcon.svg";
import EyeSlashIcon from "../assets/eyeSlash.svg";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    minLength: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });

  const validatePassword = (password) => {
    const validations = {
      minLength: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[^A-Za-z0-9]/.test(password),
    };
    setPasswordValidations(validations);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  async function handleSignUp(e) {
    e.preventDefault();
    setCreatingUser(true);
    try {
      const response = await fetch("https://period-slay.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });
      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsFail(true);
      }
      setCreatingUser(false);
    } catch (error) {
      setIsFail(true);
      console.error("signup error:", error);
    }
  }
  return (
    <>
      <Header />
      <main className="bg-primary50 relative">
        <div className="w-[90%] mx-auto py-20 relative">
          <div className="max-w-3xl w-full md:w-[40%] px-4 relative z-10">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl transform translate-x-[50] md:translate-x-[110%]">
              <h1 className="font-DmSerif text-6xl text-center mb-4">
                Sign Up
              </h1>
              <form className="form" onSubmit={handleSignUp}>
                <div className="mb-6">
                  <label htmlFor="name">
                    Full Name
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={creatingUser}
                      className="border-primary500"
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label htmlFor="email">
                    Email
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={creatingUser}
                      className="border-primary500"
                    />
                  </label>
                </div>
                <div className="mb-4">
                  <label className="relative" htmlFor="password">
                    Password
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      disabled={creatingUser}
                      className="border-primary500"
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

                  <div className="validation text-xl text-neutral800 mt-2">
                    <p>Password must:</p>
                    <ul>
                      <li>
                        <ValidationFeedback
                          isValid={passwordValidations.minLength}
                        />
                        Be a minimum of 8 characters
                      </li>
                      <li>
                        <ValidationFeedback
                          isValid={passwordValidations.lowercase}
                        />
                        Include at least one lowercase letter
                      </li>
                      <li>
                        <ValidationFeedback
                          isValid={passwordValidations.uppercase}
                        />
                        Include at least one uppercase letter
                      </li>
                      <li>
                        <ValidationFeedback
                          isValid={passwordValidations.number}
                        />
                        Include a number
                      </li>
                      <li>
                        <ValidationFeedback
                          isValid={passwordValidations.specialChar}
                        />
                        Include a special character
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-4">
                  <label htmlFor="password" className="relative">
                    Confirm Password
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      disabled={creatingUser}
                      className="border-primary500"
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
                <button
                  className="rounded-md px-8 py-4 w-full text-white text-lg font-medium bg-primary500 my-5"
                  type="submit"
                  disabled={creatingUser}
                >
                  Sign Up
                </button>
              </form>
              <div className="text-center">
                <p className="text-xl">
                  Already have an account?{" "}
                  <Link className="text-primary500" to="/login">
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute top-[12%] left-[33%] transform -translate-x-1/2">
            <Slogan />
            <div className="relative">
              <img
                src={UterusFull}
                alt="placeholder"
                className="mt-[-55px] ml-[-48px] h-[410px] w-[410px]"
              />
            </div>
          </div>
          {isSuccess && (
            <Notification
              imgSrc={SuccessIcon}
              LinkText={"Proceed to Login"}
              route={"/login"}
            >
              <p className="font-medium mb-10">Account created successfully</p>
              <p>We are happy to have you onboard with us!</p>
            </Notification>
          )}
          {isFail && (
            <Notification
              imgSrc={FailIcon}
              LinkText={"Try Again"}
              onClick={() => {
                setIsFail(false);
                window.location.reload();
              }}
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
