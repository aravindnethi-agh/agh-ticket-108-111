import React, { useEffect, useState } from "react";
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
} from "./LoginPage.style";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const navigate = useNavigate(); // Correctly use navigate hook for redirecting
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onSubmit = async (data) => {
    try {
      // Send a POST request to the backend API
      const response = await axios.post("http://localhost:22000/api/v1/agent/login", {
        email: data.email,
        password: data.password,
      });

      // Handle the response from the server
      if (response.data.success) {
        // Set the token and user details in cookies
        Cookies.set("agent-token", response.data.token, { expires: 7 });

        // Update the auth state
        setIsAuthenticated(true); // Update state to handle redirection
      } else {
        // Handle invalid login credentials
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  // useEffect to handle redirection only once after authentication
  useEffect(() => {
    if (Cookies.get("agent-token")) {
      navigate("/user"); // Redirect to user dashboard if token exists
    }
  }, [isAuthenticated, navigate]); // Dependency on isAuthenticated

  return (
    <LoginContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
        {errors.email && (
          <ErrorMessage>{errors.email.message}</ErrorMessage>
        )}

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

export default LoginPage;
