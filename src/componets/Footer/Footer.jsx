import "./Footer.scss";
const Footer = ({ isDarkModeOn }) => {
  var svgIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
    </svg>
  );


  const divCustomStyle = {
    width: "100%",
    height: "fit-content",
    margin: "2rem 0 1rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const pTagCustomStyle = {
    width: "fit-content",
    textAlign: "center",
    fontWeight: "400",
    fontFamily: "Inter",
  };
  const h4TagCustomStyle = {
    width: "fit-content",
    textAlign: "start",
    marginLeft: "5px",
    fontWeight: "600",
  };
  return (
    <div className="footer-main" style={divCustomStyle}>
      <p style={pTagCustomStyle}>Designed with {svgIcon} by Sagar Dhone</p>{" "}
      <br />
    </div>
  );
};

export default Footer;
