import styled from "styled-components";

export const UserDetailsContainer = styled.div`
  padding: 20px;
`;

export const ApproveButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 10px;
  &:hover {
    background-color: #45a049;
  }
`;

export const RejectButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #d32f2f;
  }
`;

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
`;

export const PopupButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #0d6efd;
  font-size: 16px;
  margin-bottom: 20px;

  svg {
    margin-right: 5px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const StatusText = styled.span`
  color: ${(props) =>
    props.status === "Pending"
      ? "#DAA520" /* Goldenrod */
      : props.status === "Approved"
      ? "green"
      : props.status === "Declined"
      ? "red"
      : "black"};
`;

export const DocumentContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DocumentViewer = styled.img`
  width: 300px;
  height: auto;
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
`;

export const PdfViewer = styled.embed`
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const DocumentIframe = styled.iframe`
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
