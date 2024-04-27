import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateBlogForm from "../components/CreateBlogForm";

export default function CreateBlog() {
  const [blog, setBlog] = useState([]);

  async function handleNewBlog(e, blogData) {
    e.preventDefault();
    try {
      const response = await fetch("https://period-slay.onrender.com/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      const data = await response.json();
      console.log("New blog created:", data);
      setBlog((prevBlogs) => [...prevBlogs, data]);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto">
          <CreateBlogForm onSubmit={handleNewBlog} />
        </div>
      </main>
      <Footer />
    </>
  );
}
