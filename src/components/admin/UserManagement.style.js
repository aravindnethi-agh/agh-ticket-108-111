import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 20px;
`;

export const UserList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const UserItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const StatusText = styled.span`
  color: ${(props) =>
    props.status === "pending"
      ? "#DAA520"
      : props.status === "accepted"
      ? "green"
      : props.status === "rejected"
      ? "red"
      : "black"};
`;

export const KnowMoreButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;
