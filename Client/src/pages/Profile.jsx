import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Profile() {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location = "/login";
    } else {
      fetchUserDetails();
    }
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        const [firstName, lastName] = data.fullName.split(" ");
        setUserDetails({ firstName, lastName, email: data.email });
      } else {
        console.error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto py-10">
          <div className="flex items-center gap-10">
            <div className="w-[210px] h-[340px]bg-white shadow-lg">
              <div className="flex flex-col items-start gap-10 pl-4 py-4 text-xl">
                <button>My Profile</button>
                <button>Notifications</button>
                <button onClick={handleLogout}>Log out</button>
                <button>Delete Account</button>
              </div>
            </div>

            <div className="grow">
              <h2 className="font-medium text-xl mb-4">My Profile</h2>
              <div className="bg-primary50 rounded-xl px-5 py-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-xl">Personal Information</p>
                  <button className="border border-primary500 text-primary500 text-xl p-[10px]">
                    Edit
                  </button>
                </div>
                <table className="table-auto">
                  <tbody>
                    {userDetails && (
                      <>
                        <tr>
                          <td className="px-4 py-2">First Name</td>
                          <td className="px-4 py-2">{userDetails.firstName}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">Last Name</td>
                          <td className="px-4 py-2">{userDetails.lastName}</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">Email Address</td>
                          <td className="px-4 py-2">{userDetails.email}</td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
