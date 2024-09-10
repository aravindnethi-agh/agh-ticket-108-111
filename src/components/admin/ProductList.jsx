import React from "react";
import {
  List,
  ListItem,
  ProductName,
  ProductInfo,
  ButtonGroup,
  EditButton,
  RemoveButton,
  CommissionTable,
  CommissionRate,
} from "./ProductList.style.js";

const ProductList = ({ products, onEdit, onRemove }) => {
  return (
    <List>
      {products.map((product) => (
        <ListItem key={product._id}>
          <img
            src={product.imageUrl}
            alt={product.courseName}
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <ProductName>{product.courseName}</ProductName>
          <ProductInfo>{product.description}</ProductInfo>
          <ProductInfo>Price: Rs.{product.pricing}</ProductInfo>
          <CommissionTable>
            <thead>
              <tr>
                <th>Occupation</th>
                <th>Commission Rate</th>
              </tr>
            </thead>
            {/* <tbody>
              {Object.entries(product.commissionRates).map(
                ([occupation, rate]) => (
                  <tr key={occupation}>
                    <td>{occupation}</td>
                    <CommissionRate>{rate}%</CommissionRate>
                  </tr>
                )
              )}
            </tbody> */}
          </CommissionTable>
          <ButtonGroup>
            <EditButton onClick={() => onEdit(product)}>Edit</EditButton>
            <RemoveButton onClick={() => onRemove(product._id)}>
              Remove
            </RemoveButton>
          </ButtonGroup>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;