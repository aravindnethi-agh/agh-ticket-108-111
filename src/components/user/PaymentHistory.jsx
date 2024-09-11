import React, { useState, useEffect } from 'react';
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { Card, Table, TableCell, TableHeader, Button, PageInfo, LoadingMessage, ErrorMessage, CardHeader, Title, TableRow, PaginationContainer } from './PaymentHistory.style';

const PaymentHistory = () => {
  const [paymentData, setPaymentData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const token = Cookies.get("agent-token");
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;
  console.log(userId)
  const fetchPaymentHistory = async (page = 1) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:22000/api/v1/paymentManagement/history/${userId}?page=${page}&limit=10`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPaymentData(response.data);
      setCurrentPage(page);
    } catch (err) {
      setError('Failed to fetch payment history. Please try again.');
      console.error('Error fetching payment history:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentHistory();
  }, [userId]);

  if (isLoading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!paymentData) return null;

  const { data, totalPages } = paymentData;

  return (
    <Card>
      <CardHeader>
        <Title>Payment History</Title>
      </CardHeader>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Course Name</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Amount</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {data.affiliatelinks.flatMap(affiliate =>
            affiliate.courseBoughtTimings.map((course, index) => (
              <TableRow key={`${affiliate._id}-${index}`}>
                <TableCell>{course.courseName}</TableCell>
                <TableCell>{new Date(course.date).toLocaleDateString()}</TableCell>
                <TableCell>${course.amount}</TableCell>
              </TableRow>
            ))
          )}
        </tbody>
      </Table>
      <PaginationContainer>
        <Button
          onClick={() => fetchPaymentHistory(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <PageInfo>Page {currentPage} of {totalPages}</PageInfo>
        <Button
          onClick={() => fetchPaymentHistory(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </PaginationContainer>
    </Card>
  );
};

export default PaymentHistory;