import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode"; // Corrected import without braces
import {
  DashboardContainer,
  CourseCard,
  CourseName,
  CourseTiming,
  ErrorMessage,
} from "./UserDashboard.style";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const UserDashboard = () => {
  const [courseDetails, setCourseDetails] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchDashboardDetails = useCallback(async () => {
    const token = Cookies.get("agent-token");
    
    if (!token) {
      setError("Authentication required. Please log in.");
      navigate("/login");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/affiliates/dashboard/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setCourseDetails(response.data.courseDetails.affiliatelinks);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Token is invalid or expired. Please log in again.");
        Cookies.remove("agent-token"); // Corrected token key removal
        navigate("/login");
      } else {
        setError("Something went wrong while fetching dashboard details.");
      }
    } finally {
      setLoading(false);
    }
  }, [navigate]); // Memoizing with useCallback

  useEffect(() => {
    fetchDashboardDetails();
  }, [fetchDashboardDetails]); // Now included in the dependency array

  if (loading) return <div>Loading...</div>;

  return (
    <DashboardContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {courseDetails.length > 0 ? (
        courseDetails.map((link, index) => (
          <CourseCard key={index}>
            <CourseName>{link.courseName.courseName}</CourseName>
            <CourseTiming>
              {link.courseBoughtTimings.map((timing, idx) => (
                <div key={idx}>
                  Bought On: {new Date(timing.boughtAt).toLocaleDateString()}
                </div>
              ))}
            </CourseTiming>
          </CourseCard>
        ))
      ) : (
        <div>No course details available</div>
      )}
    </DashboardContainer>
  );
};

export default UserDashboard;
