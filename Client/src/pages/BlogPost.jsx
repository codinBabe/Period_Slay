import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useEffect, useState } from "react";

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
          <div>
            <h1>{post?.title}</h1>
            <p>{post?.content[0]}</p>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
