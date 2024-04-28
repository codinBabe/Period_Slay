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
  console.log(post);
  useEffect(() => {
    fetch(`/blog/${id}`).then((res) => {
      res.json().then((post) => setPost(post));
    });
  }, [id]);

  return (
    <>
      <Header />
      <main>
        <section className="my-12">
          <div className="container mx-auto">
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
                  <div className="flex items-center justify-between my-6">
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
                    <div className="flex items-center gap-3">
                      <a href="#" target="_blank" rel="noreferrer">
                        <img src={LinkIcon} alt="icon" />
                      </a>
                      <a href="#" target="_blank" rel="noreferrer">
                        <img src={LinkedIn} alt="icon" />
                      </a>
                      <a href="#" target="_blank" rel="noreferrer">
                        <img src={X} alt="icon" />
                      </a>
                      <a href="#" target="_blank" rel="noreferrer">
                        <img src={Facebook} alt="icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="content-section flex justify-center my-20">
                  <div className="left w-[320px]">
                    <h2 className="font-DmSerif text-primary500 text-[32px]">
                      Contents
                    </h2>
                    <h3 className="text-lg">Introduction</h3>
                    {post?.sections?.map((item, i) => (
                      <h3 key={i} className="text-lg">
                        {item.subtitle}
                      </h3>
                    ))}
                    {post.conclusion && <h3 className="text-lg">Conclusion</h3>}
                  </div>
                  <div className="right w-[896px]">
                    <h2 className="font-DmSerif text-primary500 text-[32px] mb-10">
                      {post.topic}
                    </h2>
                    <div>
                      <h3 className="font-medium text-[26px] mt-10 mb-5">
                        Introduction
                      </h3>
                      <p>{post.introduction}</p>
                    </div>
                    <img
                      src={post.contentImage}
                      alt="content-poster"
                      className="my-5"
                    />
                    <div>
                      {post?.sections?.map((section, i) => (
                        <div key={i}>
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
                      <div>
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
