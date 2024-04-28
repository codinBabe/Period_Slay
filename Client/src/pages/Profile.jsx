import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CustomButton from "../components/CustomButton";
import FailIcon from "../assets/fail-icon.png";
import { Link } from "react-router-dom";
import Editpen from "../assets/editpen.svg";

export default function Profile() {
  const [userDetails, setUserDetails] = useState([]);
  const [blog, setBlog] = useState([]);
  const [activeButton, setActiveButton] = useState("My Profile");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location = "/login";
    } else {
      fetchUserDetails();
    }
  }, []);
  useEffect(() => {
    fetch("/blog").then((res) => {
      res.json().then((blog) => setBlog(blog));
    });
  }, []);

  async function fetchUserDetails() {
    try {
      const response = await fetch("/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        const [firstName, lastName] = data.fullName.split(" ");
        setUserDetails({
          firstName,
          lastName,
          email: data.email,
          age: data.age,
          periodCycle: data.periodCycle,
          lastPeriod: new Date(data.lastPeriod).toLocaleDateString("en-US"),
          weight: data.weight,
        });
      } else {
        console.error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  async function handleDeleteAccount() {
    try {
      const response = await fetch("/user", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        localStorage.removeItem("token");
        window.location = "/signup";
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto py-10">
          <div className="flex items-start gap-10">
            <div className="w-[210px] h-[340px]bg-white shadow-lg">
              <div className="flex flex-col items-start gap-10 pl-4 py-4 text-xl">
                <button
                  className={
                    activeButton === "My Profile"
                      ? "bg-primary50 w-[210px] h-[70px] ml-[-16px]"
                      : ""
                  }
                >
                  My Profile
                </button>
                <button
                  className={
                    activeButton === "Notifications"
                      ? "bg-primary50 w-[210px] h-[70px] ml-[-16px]"
                      : ""
                  }
                >
                  Notifications
                </button>
                <CustomButton
                  text={"Log out"}
                  imgSrc={FailIcon}
                  onClick={handleLogout}
                  confirmText={"Are you sure you want to log out?"}
                >
                  <img src={FailIcon} alt="icon" />
                  <p className="font-medium">You have been logged out</p>
                  <p>
                    Please click below to refresh your browser to log back in
                  </p>
                  <Link
                    to={"/login"}
                    className="bg-primary500 text-white py-4 px-8 text-lg rounded-md"
                  >
                    Refresh and log me back in
                  </Link>
                </CustomButton>
                <CustomButton
                  text={"Delete Account"}
                  imgSrc={FailIcon}
                  confirmText={" Are you sure you want to delete your account?"}
                  onClick={handleDeleteAccount}
                >
                  <p className="font-medium">
                    You have successfully deleted your account
                  </p>
                  <p>We’re so sorry to see you go!</p>
                </CustomButton>
              </div>
            </div>
            <div className="grow">
              <div className="flex flex-col gap-12">
                <div>
                  <h2 className="font-medium text-xl mb-4">My Profile</h2>
                  <div className="bg-primary50 rounded-xl px-5 py-3 shadow-xl w-[915px] h-[160px]">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-xl">
                        Personal Information
                      </p>
                      <Link
                        to={"/profile/edit"}
                        className="flex items-center gap-2 border border-primary500 text-primary500 text-xl p-[10px]"
                      >
                        <span>
                          <img src={Editpen} alt="icon" />
                        </span>
                        Edit
                      </Link>
                    </div>
                    {userDetails && (
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-40">
                          <p className="px-4 py-2">First Name</p>
                          <p className="px-4 py-2">Last Name</p>
                          <p className="px-4 py-2">Email Address</p>
                        </div>
                        <div className="flex items-center gap-48">
                          <p className="px-4 py-2">{userDetails?.firstName}</p>
                          <p className="px-4 py-2">{userDetails?.lastName}</p>
                          <p className="px-4 py-2">{userDetails?.email}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="bg-primary50 rounded-xl px-5 py-3 shadow-xl w-[915px] h-[243px]">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-xl">My Period</p>
                      <Link
                        to={"/profile/edit"}
                        className="flex items-center gap-2 border border-primary500 text-primary500 text-xl p-[10px]"
                      >
                        <span>
                          <img src={Editpen} alt="icon" />
                        </span>
                        Edit
                      </Link>
                    </div>
                    {userDetails && (
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-40">
                          <p className="px-4 py-2">Cycle Length</p>
                          <p className="px-4 py-2">Last Period</p>
                          <p className="px-4 py-2">Weight</p>
                        </div>
                        <div className="flex items-center gap-48">
                          <p className="px-4 py-2">
                            {userDetails?.periodCycle}
                          </p>
                          <p className="px-4 py-2">{userDetails?.lastPeriod}</p>
                          <p className="px-4 py-2">{userDetails?.weight}</p>
                        </div>
                        <div className="flex items-center gap-40">
                          <p className="px-4 py-2">Age</p>
                        </div>
                        <div className="flex items-center gap-48">
                          <p className="px-4 py-2">{userDetails?.age}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div>
                    <h2 className="font-medium text-xl mb-4">
                      Recommended Articles
                    </h2>
                    <div className="grid grid-cols-4 w-[915px] h-[160px]">
                      {blog.slice(0, 4).map((item, i) => (
                        <Link
                          to={"/blog/" + item._id}
                          key={i}
                          className="flex items-center justify-center bg-primary50 rounded-xl px-5 py-3 shadow-xl w-[203px] h-[179px]"
                        >
                          <h2 className="font-medium text-xl">{item.title}</h2>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
