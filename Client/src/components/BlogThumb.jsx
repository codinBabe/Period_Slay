import { Link } from "react-router-dom";

export default function BlogThumb({
  topic,
  introduction,
  category,
  poster,
  link,
  time,
}) {
  return (
    <div className="flex items-center justify-between">
      <img src={poster} alt="poster" />
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-5">
          <h4>{category}</h4>
          <p>{time}</p>
        </div>
        <div>
          <h3>{topic}</h3>
          <p>{introduction}</p>
        </div>
        <Link to={link}>Read More</Link>
      </div>
    </div>
  );
}
