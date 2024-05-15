import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";
import InfoSection from "../components/InfoSection";
import BlogThumb from "../components/BlogThumb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("View all");
  useEffect(() => {
    fetch("https://period-slay.onrender.com/blog").then((res) => {
      res.json().then((blog) => setBlog(blog));
    });
  }, []);

  const categories = blog.reduce((acc, post) => {
    if (!acc[post.categories]) {
      acc[post.categories] = [];
    }
    acc[post.categories].push(post);
    return acc;
  }, {});

  const categoryNames = ["View all", ...Object.keys(categories)];
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary500 text-white">
          <div className="w-[90%] mx-auto px-8 py-8 md:py-28 md:px-0">
            <div className="md:w-[974px] md:h-[146px]">
              <h1 className="font-DmSerif text-[32px] mb-5">
                Discover Health and Wellness
              </h1>
              <p className="text-lg md:text-xl">
                Whether you're navigating puberty, managing your menstrual
                cycle, or seeking advice on sexual health, our expertly curated
                content aims to inform, inspire, and support you every step of
                the way. Join us as we explore a range of topics designed to
                educate, uplift, and empower you to live your healthiest life.
              </p>
            </div>
          </div>
        </section>
        <section className="w-[90%] mx-auto mt-16 md:my-20">
          <Slider autoplay={true} autoplaySpeed={5000} speed={1000}>
            {blog.map((item, i) => (
              <div key={i}>
                <BlogThumb
                  poster={item.poster}
                  time={"5 min read"}
                  category={item.categories}
                  topic={item.topic}
                  introduction={item.introduction.substring(
                    0,
                    item.introduction.indexOf(".") + 1
                  )}
                  link={"/blog/" + item._id}
                />
              </div>
            ))}
          </Slider>
        </section>
        <section>
          <div className="w-[90%] mx-auto my-8">
            <div className="mb-2">
              {categoryNames.map((category, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedCategory(category)}
                  className={`mr-4 text-base ${
                    selectedCategory === category
                      ? "text-neutralNeutral"
                      : "text-primary500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {(selectedCategory === "View all"
                ? blog
                : categories[selectedCategory]
              ).map((item, i) => (
                <BlogCard
                  key={i}
                  id={item._id}
                  author={item.author}
                  topic={item.topic}
                  category={item.categories}
                  introduction={item.introduction}
                  poster={item.poster}
                  datePublished={item.datePublished}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-primary500 py-10 text-white">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col gap-5 py-12">
              <h2 className="font-DmSerif text-[30px] md:text-[46px]">
                Unlock Your Health Potential Today
              </h2>
              <p className="text-lg">
                Sign up for full access to period tracking tools and
                personalized health content.
              </p>
              <div className="flex items-center gap-6">
                <button className="py-3 px-6 text-base md:py-4 md:px-8 md:text-lg font-medium bg-white text-primary500 rounded-md">
                  Sign Up
                </button>
                <button className="py-3 px-6 text-base md:py-4 md:px-8 md:text-lg font-medium border border-white text-white rounded-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        <InfoSection />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
