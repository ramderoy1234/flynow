import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h4>Follow Us</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia vel,
        suscipit nihil consequuntur nemo nulla laboriosam tempora sunt voluptates
        excepturi aliquam, at ex odit ea officiis dignissimos similique.
      </p>
      <div className="icons">
        {/* Use React Icons components */}
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
        
        <a href="#">
          <FaWhatsapp/>
        </a>

      </div>
      <p>Made with By <span>Ramderoy</span></p>
    </footer>
  );
};

export default Footer;
