import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: auto;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const FileInput = styled.input`
  margin-top: 5px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
  display: block;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ConfirmationMessage = styled.div`
  color: green;
  font-size: 1rem;
  margin-top: 20px;
`;

export const RequestOtpButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 2px;
  margin: 10px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1 rem;
  &:hover {
    background-color: #0056b3;
  }
`;
