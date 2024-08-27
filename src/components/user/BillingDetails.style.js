import styled from "styled-components";

export const BillingContainer = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const StatusItem = styled.div`
  margin-bottom: 10px;
`;

export const ResubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
