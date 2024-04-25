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

  useEffect(() => {
    fetch(`/blog/${id}`).then((res) => {
      res.json().then((post) => setPost(post));
    });
  }, [id]);

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container mx-auto">
            {post && (
              <>
                <div className="hero-section">
                  <div>
                    <p>{post.categories}</p>
                    <p>5 minute read</p>
                  </div>
                  <div>
                    <h1 className="text-[52px] font-DmSerif mb-4">
                      {post.title}
                    </h1>
                    <img src={post.poster} alt={post.title} className="mb-4" />
                  </div>
                  <div>
                    <div>
                      <div>
                        <p className="">Written by</p>
                        <p className="">{post.author}</p>
                      </div>
                      <div>
                        <p className="">Published on</p>
                        <p className="">{post.datePublished}</p>
                      </div>
                    </div>
                    <div>
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
                <div className="content-section flex justify-center gap-10">
                  <div className="left">
                    <h2 className="font-DmSerif text-primary500 text-[32px]">
                      Contents
                    </h2>
                    <h3 className="text-lg">Introduction</h3>
                    {post.subtitle.map((item, i) => (
                      <h3 key={i} className="text-lg">
                        {item}
                      </h3>
                    ))}
                    {post.conclusion && <h3>Conclusion</h3>}
                  </div>
                  <div className="right">
                    <h2 className="font-DmSerif text-primary500 text-[32px]">
                      {post.topic}
                    </h2>
                    <div>
                      <h3 className="font-medium text-[26px]">Introduction</h3>
                      <p>{post.introduction}</p>
                    </div>
                    <img src={post.contentImage} alt="content-poster" />
                    <div>
                      {post.subtitle.map((item, i) => (
                        <div key={i}>
                          <h3 className="font-medium text-[26px]">{item}</h3>
                          {post.content.map((item, i) => (
                            <p key={i}>{item}</p>
                          ))}
                        </div>
                      ))}
                    </div>
                    {post.conclusion && (
                      <div>
                        <h3 className="font-medium text-[26px]">Conclusion</h3>
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
