import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useEffect, useState } from "react";
import Facebook from "../assets/Facebook.svg";
import LinkIcon from "../assets/link-icon.svg";
import X from "../assets/X.svg";
import LinkedIn from "../assets/LinkedIn.svg";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/blog/${id}`)
      .then((res) => res.json())
      .then((post) => {
        setPost(post);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post:", error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <Header />
      <main>
        <section className="my-12">
          <div className="w-[90%] mx-auto">
            {post && (
              <>
                <div className="hero-section">
                  <div className="text-base flex items-center gap-4 mb-2">
                    <p className="bg-neutralLightest py-1 px-2">
                      {post.categories}
                    </p>
                    <p>5 minute read</p>
                  </div>
                  <div>
                    <h1 className="text-[52px] font-DmSerif mb-5 text-primary500">
                      {post.title}
                    </h1>
                    <img src={post.poster} alt={post.title} className="mb-4" />
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-between my-6">
                    <div className="flex items-center gap-8 text-base">
                      <div>
                        <p className="">Written by</p>
                        <p className="font-medium">{post.author}</p>
                      </div>
                      <div>
                        <p className="">Published on</p>
                        <p className="font-medium">{post.datePublished}</p>
                      </div>
                    </div>
                    <div className="social-icons flex items-center gap-2">
                      <a
                        className="bg-neutralLightest rounded-full w-8 h-8 flex items-center justify-center"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={LinkIcon} alt="icon" />
                      </a>
                      <a
                        className="bg-neutralLightest rounded-full w-8 h-8 flex items-center justify-center"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={LinkedIn} alt="icon" />
                      </a>
                      <a
                        className="bg-neutralLightest rounded-full w-8 h-8 flex items-center justify-center"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={X} alt="icon" />
                      </a>
                      <a
                        className="bg-neutralLightest rounded-full w-8 h-8 flex items-center justify-center"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={Facebook} alt="icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content-section flex flex-col md:flex-row justify-center my-20">
                  <div className="left md:w-[320px] mr-8">
                    <h2 className="font-DmSerif text-primary500 text-[32px]">
                      Contents
                    </h2>
                    <a href="#introduction" className="content-link text-lg">
                      Introduction
                    </a>
                    {post?.sections?.map((item, i) => (
                      <a
                        key={i}
                        href={`#${item.subtitle
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                        className="content-link text-lg"
                      >
                        {item.subtitle}
                      </a>
                    ))}
                    {post.conclusion && (
                      <a href="#conclusion" className="content-link text-lg">
                        Conclusion
                      </a>
                    )}
                  </div>
                  <div className="right md:w-[896px]">
                    <h2 className="font-DmSerif text-primary500 text-[32px] mb-10">
                      {post.topic}
                    </h2>
                    <div>
                      <h3 className="font-medium text-[26px] mt-10 mb-5">
                        Introduction
                      </h3>
                      <div>
                        {post.introduction.split("\n").map((item, index) => (
                          <p key={index} className="my-2">
                            {item.trim()}
                          </p>
                        ))}
                      </div>
                    </div>
                    <img
                      src={post.contentImage}
                      alt="content-poster"
                      className="my-5"
                    />
                    <div>
                      {post?.sections?.map((section, i) => (
                        <div
                          key={i}
                          id={section.subtitle
                            .replace(/\s+/g, "-")
                            .toLowerCase()}
                        >
                          <h3 className="font-medium text-[26px] mb-5">
                            {section.subtitle}
                          </h3>
                          <div className="my-5">
                            {section.content.split("\n").map((item, index) => (
                              <p key={index} className="my-2">
                                {item.trim()}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {post.conclusion && (
                      <div id="conclusion">
                        <h3 className="font-medium text-[26px] my-5">
                          Conclusion
                        </h3>
                        <p>{post.conclusion}</p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
