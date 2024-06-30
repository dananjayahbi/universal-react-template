import React, { useState, useEffect } from "react";
import { Col, Row, Typography } from "antd";

const SectionCard2 = () => {
  // State to store the window inner width
  const [windowInnerwidth, setWindowInnerWidth] = useState(window.innerWidth);

  // Event listener for resize event
  useEffect(() => {
    const handleResize = () => {
      setWindowInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            marginLeft: "75px",
          }}
        >
          <Typography.Title
            level={2}
            style={{ color: "#271111", fontWeight: 700 }}
          >
            Section Card 2
          </Typography.Title>
        </div>
        <hr
          style={{
            width: "50px",
            height: "7px",
            backgroundColor: "#9f0202",
            border: "none",
            borderRadius: "200px",
            marginLeft: "75px",
            marginTop: "-10px",
          }}
        />
        <Row style={{ padding: "0" }}>
          <Col
            span={windowInnerwidth < 540 ? 24 : windowInnerwidth < 850 ? 12 : 6}
            style={{
              padding: " 20px 30px 20px 30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "140px",
                height: "300px",
                margin: "0 50px",
                backgroundColor: "#111",
                border: "none",
                borderRadius: "200px",
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/thumbnails/037/044/052/small_2x/ai-generated-studio-shot-of-black-headphones-over-music-note-explosion-background-with-empty-space-for-text-photo.jpg)",
                backgroundSize: "cover",
              }}
            />
            <Typography.Title level={4} style={{ color: "#9f0202" }}>
              Title
            </Typography.Title>
            <Typography.Text>This is a dummy text.</Typography.Text>
          </Col>
          <Col
            span={windowInnerwidth < 540 ? 24 : windowInnerwidth < 850 ? 12 : 6}
            style={{
              padding: " 20px 30px 20px 30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "140px",
                height: "300px",
                margin: "0 50px",
                backgroundColor: "#111",
                border: "none",
                borderRadius: "200px",
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/024/295/098/non_2x/music-notes-background-illustration-ai-generative-free-photo.jpg)",
                backgroundSize: "cover",
              }}
            />
            <Typography.Title level={4} style={{ color: "#9f0202" }}>
              Title
            </Typography.Title>
            <Typography.Text>This is a dummy text.</Typography.Text>
          </Col>
          <Col
            span={windowInnerwidth < 540 ? 24 : windowInnerwidth < 850 ? 12 : 6}
            style={{
              padding: " 20px 30px 20px 30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "140px",
                height: "300px",
                margin: "0 50px",
                backgroundColor: "#111",
                border: "none",
                borderRadius: "200px",
                backgroundImage:
                  "url(https://thumbs.dreamstime.com/b/vibrant-illustration-music-notes-flowing-dynamic-colorful-background-evoking-rhythm-melody-abstract-backdrop-318499041.jpg)",
                backgroundSize: "cover",
              }}
            />
            <Typography.Title level={4} style={{ color: "#9f0202" }}>
              Title
            </Typography.Title>
            <Typography.Text>This is a dummy text.</Typography.Text>
          </Col>
          <Col
            span={windowInnerwidth < 540 ? 24 : windowInnerwidth < 850 ? 12 : 6}
            style={{
              padding: " 20px 30px 20px 30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "140px",
                height: "300px",
                margin: "0 50px",
                backgroundColor: "#111",
                border: "none",
                borderRadius: "200px",
                backgroundImage:
                  "url(https://t4.ftcdn.net/jpg/08/12/23/45/360_F_812234599_NkBHdY9fiDIYyfraLCTdkKJIDuwzQgIK.jpg)",
                backgroundSize: "cover",
              }}
            />
            <Typography.Title level={4} style={{ color: "#9f0202" }}>
              Title
            </Typography.Title>
            <Typography.Text>This is a dummy text.</Typography.Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SectionCard2;
