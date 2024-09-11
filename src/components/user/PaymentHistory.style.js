import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 15px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 12px;
  background-color: #f8f8f8;
  border-bottom: 2px solid #e0e0e0;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #e0e0e0;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const PageInfo = styled.span`
  font-size: 14px;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

export const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;
