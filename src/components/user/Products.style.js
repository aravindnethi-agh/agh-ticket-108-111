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

export const ProductWrapper = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 60%;
  text-align: center;
`;

export const ProductTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

export const ProductType = styled.h4`
  color: #ff6347; /* Red color */
  margin-bottom: 10px;
`;

export const ProductInfo = styled.pre`
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
