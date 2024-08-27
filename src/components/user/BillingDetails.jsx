import React, { useState } from "react";
import {BillingContainer,Title,StatusItem,ResubmitButton} from './BillingDetails.style'


const BillingDetails = () => {
  const [panStatus, setPanStatus] = useState("Pending Verification");
  const [bankStatus, setBankStatus] = useState("Verified");
  

  const handleResubmit = () => {
    // Logic to handle resubmission
    setBankStatus("Pending Verification")
    setPanStatus("Pending Verification")
    console.log("Resubmitting details");
  };

  return (
    <BillingContainer>
    
      <Title>Billing Details</Title>
      <StatusItem>PAN Card Status: {panStatus}</StatusItem>
      <StatusItem>Bank Details Status: {bankStatus}</StatusItem>
      {(panStatus === "Pending Verification" ||
        bankStatus === "Pending Verification") && (
        <ResubmitButton onClick={handleResubmit}>
          Resubmit Details
        </ResubmitButton>
      )}
     
    </BillingContainer>
  );
};

export default BillingDetails;
