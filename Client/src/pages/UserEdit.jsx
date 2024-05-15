import UserForm from "../components/UserForm";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EditUser() {
  const [user, setUser] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetch("https://period-slay.onrender.com/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  async function handleSaveButtonClick(e, data) {
    e.preventDefault();
    setIsUpdating(true);
    const response = await fetch("https://period-slay.onrender.com/user", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const { user } = await response.json();
      setUser(user);
      setIsUpdating(false);
      setIsSubmitted(true);
      window.location = "/profile";
    } else {
      console.error("Failed to update user");
    }
  }

  return (
    <>
      <Header />
      <main className="w-[90%] mx-auto my-10">
        <div className="bg-primary50 px-6 py-3 rounded-md">
          {isUpdating ? (
            <p>Loading...</p>
          ) : isSubmitted ? (
            <p>Successfully updated!</p>
          ) : (
            user && <UserForm user={user} onSave={handleSaveButtonClick} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
