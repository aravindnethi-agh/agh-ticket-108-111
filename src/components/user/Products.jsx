import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Container, ProductWrapper, ProductTitle, ProductType, ProductInfo, ErrorMessage } from './Products.style';

const Products = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const token = Cookies.get('agent-token'); // Get token from Cookies

        if (!token) {
          setError('No token found, please log in.');
          setLoading(false);
          return;
        }

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/affiliates/products`, {
          headers: {
            Authorization: `Bearer ${token}`, // Use token from Cookies
          },
        });

        if (response.data.success) {
          setProductDetails(response.data.productDetails);
        } else {
          setError('Failed to fetch product details.');
        }
      } catch (err) {
        setError('An error occurred while fetching the product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, []);

  if (loading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <Container>
      {productDetails ? (
        <ProductWrapper>
          <ProductTitle>Product Details</ProductTitle>
          <ProductType>{`Type: ${productDetails.type}`}</ProductType>
          <ProductInfo>
            {/* Display specific data based on product details */}
            {/* {JSON.stringify(productDetails.data, null, 2)} */}
            <ErrorMessage>No product details available for this agent.</ErrorMessage>
          </ProductInfo>
        </ProductWrapper>
      ) : (
        <ErrorMessage>No product details available.</ErrorMessage>
      )}
    </Container>
  );
};

export default Products;
