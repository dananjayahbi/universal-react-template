import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

const Login3 = () => {
  const [loading, setloading] = useState(false);

  const onFinish = async (values) => {
    setloading(true);
    try {
      const response = await axios.post("http://localhost:5000/users/login", {
        email: values.email,
        password: values.password,
      });

      //If the response is 200 ok, login success
      if ((response.status = 200)) {
        window.localStorage.setItem("isLogged", true);
        window.localStorage.setItem("token", response.data.token);
        window.localStorage.setItem("userId", response.data.userId);
        message.success("Login success");
        window.location.href = "/";
      }
    } catch (error) {
      message.error("Login failed");
    }
    setloading(false);
  };

  const onFinishDummy = () => {
    window.localStorage.setItem("isLogged", true);
    window.location.href = "/";
  };

  return (
    <div>
      <div
        style={{
          background: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            maxWidth: "400px",
            margin: "auto",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "24px" }}>Login</h2>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinishDummy}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Login
              </Button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "5px",
                }}
              >
                <p>Not a member? &nbsp;</p>
                <a href="/register" style={{ textDecoration: "none" }}>
                  <p style={{ color: "#1677ff" }}>Register</p>
                </a>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login3;
