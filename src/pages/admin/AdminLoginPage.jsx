import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import {
  LoginContainer,
  Form,
  Input,
  Button,
  ErrorMessage,
} from "./AdminLoginPage.style";

const AdminLoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    if (Cookies.get("admin-token")) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const sendOtp = async (email) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/sendotp`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      
      if (response.data.success) {
        setError("otp", { message: "OTP sent to your email." });
        setOtpSent(true);
      } else {
        alert(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Failed to send OTP:", error);
      alert("An error occurred while sending OTP. Please try again.");
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/adminlogin`,
        {
          email: data.email,
          otp: data.otp,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      if (response.data.success) {
        Cookies.set("admin-token", response.data.token, { expires: 7 });
        navigate("/admin/dashboard"); // Navigate immediately after successful login
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred during login. Please try again.");
    }
  };
  
  return (
    <LoginContainer>
      <h2>Admin Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Button
          type="button"
          onClick={() =>
            sendOtp(document.querySelector("input[name='email']").value)
          }
          disabled={otpSent}
        >
          {otpSent ? "OTP Sent" : "Send OTP"}
        </Button>

        <Input
          {...register("otp", { required: "OTP is required" })}
          placeholder="OTP"
        />
        {errors.otp && <ErrorMessage>{errors.otp.message}</ErrorMessage>}

        <Input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <Button type="submit">Login</Button>
      </Form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </LoginContainer>
  );
};

export default AdminLoginPage;