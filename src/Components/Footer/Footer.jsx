import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerLinks = {
    column1: [
      { text: "Audio Description", href: "#" },
      { text: "Help Centre", href: "#" },
      { text: "Gift Cards", href: "#" },
      { text: "Media Centre", href: "#" },
    ],
    column2: [
      { text: "Investor Relations", href: "#" },
      { text: "Jobs", href: "#" },
      { text: "Terms of Use", href: "#" },
      { text: "Privacy", href: "#" },
    ],
    column3: [
      { text: "Legal Notices", href: "#" },
      { text: "Cookie Preferences", href: "#" },
      { text: "Corporate Information", href: "#" },
      { text: "Contact Us", href: "#" },
    ],
  };

  const socialIcons = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className={styles.socialIcon}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Links Columns */}
        <div className={styles.linksContainer}>
          <div className={styles.linkColumn}>
            <ul className={styles.linkList}>
              {footerLinks.column1.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <ul className={styles.linkList}>
              {footerLinks.column2.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <ul className={styles.linkList}>
              {footerLinks.column3.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Code Button */}
        <div className={styles.serviceCode}>
          <button className={styles.serviceCodeBtn}>Service Code</button>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>© 1997-2026 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
