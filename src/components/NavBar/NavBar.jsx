import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import Button from "@mui/material/Button";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import mobmenu from "../../assets/menu.png";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const name = "Panneer Selvam";

  return (
    <div>
      <nav className="navbar sticky">
        <div className="navContainer">
          <h4 style={{ color: "white", fontSize: 25 }}>{name}</h4>
          <div className="desktopMenu">
            <Link
              activeClass="active"
              to="intro"
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
              className="desktopMenuListItem"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              offset={20}
              smooth={true}
              duration={500}
              className="desktopMenuListItem"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="works"
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
              className="desktopMenuListItem"
            >
              Skills
            </Link>
          </div>
          {/* Contact */}
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            offset={200}
            smooth={true}
            duration={500}
          >
            <Button
              variant="contained"
              style={{
                borderRadius: "2rem",
                padding: "0 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingBlock: "10px",
              }}
              className="desktopMenuButton"
            >
              <ChatBubbleIcon alt="contactImg" className="desktopMenuImg" />
              Contact Me
            </Button>
          </Link>
        </div>
        <img
          src={mobmenu}
          alt="menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navMenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            offset={-50}
            smooth={true}
            duration={500}
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
