import { Link } from "react-router-dom";

export default function BlogCard({
  id,
  topic,
  author,
  category,
  introduction,
  poster,
  datePublished,
}) {
  const firstFullStopIndex = introduction.indexOf(".");
  const slicedIntroduction = introduction.slice(0, firstFullStopIndex + 1);
  return (
    <Link to={`/blog/${id}`}>
      <div className="flex flex-col gap-2 ">
        <div>
          <img src={poster} alt="placeholder" />
        </div>
        <p className="font-semibold text-sm">{category}</p>
        <div>
          <h3 className="font-DmSerif text-2xl mb-3">{topic}</h3>
          <p className="text-base">{slicedIntroduction}</p>
        </div>
        <div className="flex item-center gap-4">
          <div className="bg-neutral200 w-12 h-12 rounded-full"></div>
          <div>
            <p className="font-medium text-xl">{author}</p>
            <time className="flex items-center gap-2 text-neutral700 text-sm">
              <span>{datePublished}</span>
              <div className="bg-neutral700 w-2 h-2"></div>
              <span> 5mins read</span>
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
}
