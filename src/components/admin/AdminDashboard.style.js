import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 15px;
  }
`;

export const ChartWrapper = styled.div`
  height: 400px;
  max-width: 100%;
  overflow: hidden;
`;

export const MetricsOverview = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  div {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 30%;
    text-align: center;
    margin: 10px;
    cursor: pointer;
    h2 {
      margin-bottom: 10px;
    }

    p {
      font-size: 24px;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
    }
  }
`;
