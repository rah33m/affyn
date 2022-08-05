import { Navigation } from "../Navigation";
import { IoMdArrowDown } from "react-icons/io";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <div className="heading">
        <h1>
          <span>NEXUS LAND</span>
          YOUR NEXUS LAND
          <br /> JOURNEY DEBUT (TBC)
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus
          magna erat,
          <br />
          eget scelerisque enim rutrum aliquet. Mauris lobortis malesuada
          bibendum.
        </p>
      </div>
      <a className="mobile_pointer" href="#dynamic_nft">
        <div className="mouse_shape">
          <span />
        </div>
        <IoMdArrowDown />
      </a>
    </header>
  );
};
