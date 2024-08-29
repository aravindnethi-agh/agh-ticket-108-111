import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginContainer,
  Form,
  Input,
  Button,
  ErrorMessage
} from './LoginPage.style';

const LoginPage = ({ setUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username === "aghadmin" && data.password === "aghadmin123") {
      setUser({ isAdmin: true });
      navigate("/admin");
    } else {
      // Here you would typically check the user credentials against your database
      setUser({ isAdmin: false });
      navigate("/user");
    }
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username", { required: "Username is required" })}
          placeholder="Username"
        />
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
        
        <Input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Password"
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        
        <Button type="submit">Login</Button>
      </Form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </LoginContainer>
  );
};

export default LoginPage;
