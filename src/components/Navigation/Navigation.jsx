import { Link } from "react-router-dom";
import { Logo } from "../ui/icons/Logo";
import { IoMdArrowDropdown } from "react-icons/io";
import "./style.css";
import { HeadPhoneIcon, ProfileIcon } from "../ui/icons";
import { CgMenu, CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "static";
    }
  }, [isOpen]);
  return (
    <div>
      <button className="menu_btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CgClose /> : <CgMenu />}
      </button>
      <div className={!isOpen ? "mobile_nav" : "mobile_nav open"}>
        <div className="mobile_links">
          <Link to="/" className="get-started">
            <span>Get started</span>
            <span className="icon">
              <IoMdArrowDropdown />
            </span>
          </Link>
          <div className="sub_links">
            <Link to="/" className="link">
              <HeadPhoneIcon />
              support
            </Link>
            <hr className="divider" />
            <Link to="/" className="link">
              <ProfileIcon />
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopNavigation = () => {
  return (
    <div className="nav_right">
      <Link to="/" className="get-started">
        <span>Get started</span>
        <span className="icon">
          <IoMdArrowDropdown />
        </span>
      </Link>
      <Link to="/" className="link">
        <HeadPhoneIcon />
        support
      </Link>
      <hr className="divider" />
      <Link to="/" className="link">
        <ProfileIcon />
        login
      </Link>
    </div>
  );
};

export const Navigation = () => {
  return (
    <div className="nav_container">
      <nav className="nav">
        <Link to="/">
          <Logo />
        </Link>
        <div className="mobile">
          <MobileNavigation />
        </div>
        <div className="desktop">
          <DesktopNavigation />
        </div>
      </nav>
    </div>
  );
};
