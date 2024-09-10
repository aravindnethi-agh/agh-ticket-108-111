import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  fetchCommissionRates,
} from "../services/api";
import { notifyAffiliates } from "../services/notificationService";
import {
  ProductManagementContainer,
  Title,
  AddButton,
  LoaderContainer,
  Modal,
  ModalContent,
} from "./ProductManagement.style";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [commissionRates, setCommissionRates] = useState({});

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCommissionRates()]).then(
      ([productsData, ratesData]) => {
        setProducts(productsData);
        setCommissionRates(ratesData);
        setIsLoading(false);
      }
    );
  }, []);

  const handleAddProduct = async (product) => {
    const newProduct = await addProduct(product);
    setProducts([...products, newProduct]);
    notifyAffiliates("New product added");
    setIsAddingProduct(false);
  };

  const handleEditProduct = async (updatedProduct) => {
    const updated = await updateProduct(productToEdit._id, updatedProduct);
    setProducts(products.map((p) => (p._id === productToEdit._id ? updated : p)));
    notifyAffiliates("Product updated");
    setIsEditingProduct(false);
    setProductToEdit(null);
  };

  const handleRemoveProduct = async (_id) => {
    await deleteProduct(_id);
    setProducts(products.filter((p) => p._id !== _id));
    notifyAffiliates("Product removed");
  };

  const openEditModal = (product) => {
    setProductToEdit(product);
    setIsEditingProduct(true);
  };

  const closeEditModal = () => {
    setIsEditingProduct(false);
    setProductToEdit(null);
  };

  return (
    <ProductManagementContainer>
      <Title>Product Management</Title>
      <AddButton onClick={() => setIsAddingProduct(true)}>
        Add Product
      </AddButton>
      {isAddingProduct && (
        <ProductForm
          onSubmit={handleAddProduct}
          onCancel={() => setIsAddingProduct(false)}
        />
      )}
      {isLoading ? (
        <LoaderContainer>
          <ThreeDots color="#007bff" height={80} width={80} />
        </LoaderContainer>
      ) : (
        <ProductList
          products={products}
          onEdit={openEditModal}
          onRemove={handleRemoveProduct}
        />
      )}
      {isEditingProduct && (
        <Modal>
          <ModalContent>
            <ProductForm
              product={productToEdit}
              onSubmit={handleEditProduct}
              onCancel={closeEditModal}
            />
          </ModalContent>
        </Modal>
      )}
    </ProductManagementContainer>
  );
};

export default ProductManagement;