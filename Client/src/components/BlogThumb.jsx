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
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="order-2 md:order-1 flex flex-col gap-5 md:w-[568px] md:h-[213px]">
        <div className="flex items-center gap-5">
          <button className="text-white text-sm bg-primary500 py-1 px-2">
            {category}
          </button>
          <p className="text-primary500 text-sm">{time}</p>
        </div>
        <div>
          <h2 className="text-[32px] font-DmSerif text-primary500 mb-2">
            {topic}
          </h2>
          <p>{introduction}</p>
        </div>
        <Link className="text-neutral800 text-base" to={link}>
          Read More &gt;
        </Link>
      </div>
      <div className="order-1 md:order-2 w-full md:w-[656px] h-[500]">
        <img src={poster} alt="poster" className="w-full h-auto md:h-[500px]" />
      </div>
    </div>
  );
}
