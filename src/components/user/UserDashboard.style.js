import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const CourseCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin: 10px 0;
  width: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const CourseName = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const CourseTiming = styled.div`
  font-size: 1rem;
  color: #555;
  div {
    margin-bottom: 5px;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  margin: 20px 0;
`;
