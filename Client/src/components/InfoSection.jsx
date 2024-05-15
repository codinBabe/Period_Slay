import { Link } from "react-router-dom";
import PlaceholderImage from "../assets/Placeholder Image.png";

export default function InfoSection() {
  return (
    <section className="my-12">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:flex flex-col gap-4">
            <div className="link">
              <Link
                className="font-DmSerif text-2xl text-primary500"
                to={"/blog"}
              >
                Educational Resources Available
              </Link>
              <p className="text-base mt-2">
                Explore our extensive collection of educational blog posts on
                topics like puberty,
                <br /> reproductive health, and other important issues that
                affect women’s health.
              </p>
            </div>
            <div className="link">
              <Link
                className="font-DmSerif text-2xl text-primary500"
                to={"/tracker/calculate"}
              >
                Track Your Period Easily
              </Link>
              <p className="text-base mt-2">
                Our Website provides a simple and intuitive period tracking
                feature that allows
                <br /> you to effortlessly monitor your menstrual cycle and
                upcoming periods.
              </p>
            </div>
            <div className="link">
              <Link
                className="font-DmSerif text-2xl text-primary500"
                to={"/contact/support"}
              >
                Connect with our Community
              </Link>
              <p className="text-base mt-2">
                Join our supportive community of users where you can share
                experiences,
                <br />
                ask questions, and receive valuable support and advice from
                others going through
                <br /> similar experiences.
              </p>
            </div>
          </div>
          <div>
            <img src={PlaceholderImage} alt="cute pad display shot" />
          </div>
        </div>
      </div>
    </section>
  );
}
