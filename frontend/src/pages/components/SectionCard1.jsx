import React, { useState, useEffect } from "react";
import { Col, Row, Typography, Button } from "antd";
import img1 from "../../assets/images/img1.png";

const SectionCard1 = () => {
  // Handles the resize event and updates the flex direction of the card based on the window width.
  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setFlexDirection("column");
    } else {
      setFlexDirection("row");
    }

    if (window.innerWidth < 700) {
      setButtonPosition("center");
    } else {
      setButtonPosition("left");
    }
  };

  useEffect(() => {
    // Add event listener for resize event
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove event listener when component is unmounted
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // State to store the flex direction of the card
  const [flexDirection, setFlexDirection] = useState(
    window.innerWidth < 1200 ? "column" : "row"
  );

  // State to store the Button position based on the window width
  const [buttonPosition, setButtonPosition] = useState(
    window.innerWidth < 700 ? "center" : "left"
  );

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: flexDirection === "column" ? "0px -100px" : "0",
        }}
      >
        <Row
          style={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: flexDirection,
          }}
        >
          {/* For the image */}
          <Col
            span={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={img1} alt="doctor" style={{ width: "500px" }} />
          </Col>
          {/* For the content */}
          <Col
            span={12}
            style={{ marginTop: flexDirection === "column" ? "50px" : "0" }}
          >
            <div style={{ width: flexDirection === "column" ? "100%" : "80%" }}>
              {/* Section title */}
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  fontFamily: "sans-serif",
                  color: "#31dfcb",
                  lineHeight: "1.0",
                }}
              >
                ABOUT US
              </Typography>{" "}
              <br />
              {/* Section subtitle */}
              <Typography
                style={{
                  fontSize: "47px",
                  fontWeight: "700",
                  color: "#2d2d3d",
                  lineHeight: "1.2",
                }}
              >
                Patient health is the highest value in our work
              </Typography>{" "}
              <br />
              {/* Section description */}
              <Typography style={{ fontSize: "16px", color: "#787474" }}>
                We are a team of professionals who are always ready to help you.
                We have been working for many years to make your life better.
                Our main goal is to help you feel better and live a healthy
                life. We know how to help you and we will do our best to make
                you feel better. We are always ready to help you and we will do
                everything we can to make you feel better. We are always ready
                to help you and we will do everything we can to make you feel
                better. We are always ready to help you and we will do
                everything we can to make you feel better.
              </Typography>{" "}
              <br />
              {/* Learn More button */}
              <div style={{ display: "flex", justifyContent: buttonPosition }}>
                <Button
                  style={{
                    backgroundColor: "#3368d9",
                    color: "white",
                    borderRadius: "5px",
                    padding: "23px 30px",
                    marginTop: "20px",
                    fontSize: "16px",
                    fontWeight: "700",
                    fontFamily: "sans-serif",
                    border: "none",
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SectionCard1;
