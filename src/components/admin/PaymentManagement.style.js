import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

export const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  margin-top: 20px;
  text-align: center;
`;

export const CardTitle = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

export const CardContent = styled.pre`
  text-align: left;
  font-size: 14px;
  color: #555;
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  overflow-x: auto;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  margin-top: 20px;
`;

export const LoadingSpinner = styled.div`
  font-size: 18px;
  color: #007bff;
  margin-top: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
  margin-bottom: 20px;

  input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
