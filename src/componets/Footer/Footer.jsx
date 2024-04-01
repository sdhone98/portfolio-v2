const Footer = () => {
  const divCustomStyle = {
    width: "100%",
    height: "fit-content",
    margin: "3rem 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={divCustomStyle}>
      <p
        style={{
          width: "fit-content",
          color: "rgb(245,245,245)",
          width: "fit-content",
          textAlign: "center",
          fontWeight: "200"
        }}
      >
        Designed and Created by
      </p>
      <br/>
      <h4 style={{
          width: "fit-content",
          color: "rgb(245,245,245)",
          width: "fit-content",
          textAlign: "start",
          marginLeft: "5px",
          fontWeight: "500"
        }}>Sagar Dhone</h4>
    </div>
  );
};

export default Footer;
