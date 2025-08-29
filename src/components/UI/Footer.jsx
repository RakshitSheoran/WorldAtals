import footerData from "../../api/footerApi.json";
import Contact from "../../pages/Contact";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

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
      </footer>
    </>
  );
}
