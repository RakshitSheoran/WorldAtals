import heroImg from "../../assets/HeroImage.png";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <main className="hero-section">
      <div className="container grid grid-two-cols">
        {" "}
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time
          </h1>
          <p className="paragraph">
            Discover the history, culture and beauty of every nation. Sort,
            search and filter thorugh countries to find the details you need
          </p>
          <button onClick={() => navigate("/country")}>
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img className="banner-image " src={heroImg}></img>
        </div>
      </div>
    </main>
  );
}
