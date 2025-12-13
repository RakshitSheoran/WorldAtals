import footerData from "../../api/footerApi.json";
import Contact from "../../pages/Contact";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export default function Footer() {
  {
    footerData.map((item) => {
      console.log(item);
    });
  }

  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <>
      <footer className="footer-section">
        <div className="container grid grid-three-cols">
          {footerData.map((item) => {
            return (
              <div className="footer-contact" key={item.index}>
                <div className="icon">{footerIcon[item.icon]}</div>
                <div className="footer-contact-text">
                  <p>{item.title}</p>
                  <p>{item.details}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="grid grid-two-cols">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2024, All Right Reserved
                  <NavLink
                    to="https://www.linkedin.com/in/rakshit-sheoran-17715021b/"
                    target="_blank"
                  >
                    Rakshit Sheoran
                  </NavLink>
                </p>
              </div>

              <div className="footer-menu">
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="https://www.linkedin.com/in/rakshit-sheoran-17715021b/"
                      target="_blank"
                    >
                      Social
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://github.com/RakshitSheoran/WorldAtals"
                      target="_blank"
                    >
                      Source Code
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
