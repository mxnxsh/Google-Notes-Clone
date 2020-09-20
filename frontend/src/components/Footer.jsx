import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <p> &copy; Copyright {year} Made by Sahil  </p>
      </footer>
    </>
  );
}

export default Footer;