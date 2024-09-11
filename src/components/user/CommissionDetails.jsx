import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import {Container, Title, AffiliateCard, AffiliateTitle, InfoParagraph, SubTitle, Link, ListItem, List} from './CommissionDetails.style';

const CommissionDetails = () => {
  const [commissionData, setCommissionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommissionDetails = async () => {
      try {
        const token = Cookies.get("agent-token");
        if (!token) {
          throw new Error("Authentication token is missing");
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        const response = await axios.get(
          `http://localhost:22000/api/v1/paymentManagement/commission/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        );

        if (response.data.success) {
          setCommissionData(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError("Failed to fetch commission details: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCommissionDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container>
      <Title>Commission Details</Title>
      {commissionData.map((affiliate) => (
        <AffiliateCard key={affiliate._id}>
          <AffiliateTitle>Affiliate ID: {affiliate._id}</AffiliateTitle>
          <InfoParagraph><strong>Link:</strong> <Link href={affiliate.link}>{affiliate.link}</Link></InfoParagraph>
          <InfoParagraph><strong>Total Earnings:</strong> ${affiliate.totalEarnings}</InfoParagraph>
          <InfoParagraph><strong>Percentage:</strong> {affiliate.percentage}%</InfoParagraph>
          <div>
            <SubTitle>Course Name:</SubTitle>
            <InfoParagraph>{affiliate.courseName.courseName} (ID: {affiliate.courseName._id})</InfoParagraph>
          </div>
          <div>
            <SubTitle>Courses Bought:</SubTitle>
            <List>
              {affiliate.courseBoughtTimings.map((course) => (
                <ListItem key={course._id}>
                  {course.courseName} - {new Date(course.time).toLocaleString()}
                </ListItem>
              ))}
            </List>
          </div>
        </AffiliateCard>
      ))}
    </Container>
  );
};

export default CommissionDetails;


