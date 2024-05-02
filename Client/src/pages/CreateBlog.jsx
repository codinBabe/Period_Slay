import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CreateBlogForm from "../components/CreateBlogForm";

export default function CreateBlog() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleNewBlog(e, blogData) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://period-slay.onrender.com/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });
      if (response.ok) {
        window.location = "/blog";
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error creating blog:", error);
      setIsSubmitted(false);
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto">
          {isSubmitting && (
            <div className="flex items-center justify-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {isSubmitted && (
            <div className="bg-success500 text-white text-center rounded-md mx-auto mt-5 p-4 w-1/3">
              Blog created successfully!
            </div>
          )}
          <CreateBlogForm onSubmit={handleNewBlog} />
        </div>
      </main>
      <Footer />
    </>
  );
}
