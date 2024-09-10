import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Input,
  ErrorMessage,
  TextArea,
  ButtonGroup,
  SaveButton,
  CancelButton,
  CommissionInput,
} from "./ProductForm.style";

const ProductForm = ({ product, onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: product || {
      courseName: "",
      description: "",
      pricing: "",
      imageUrl: "",
      commissionRates: {
        Affiliate: 10,
        Retailer: 15,
        Wholesaler: 20,
        Distributor: 25,
      },
    },
  });

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)}>
      <Input
        {...register("courseName", { required: "Product name is required" })}
        placeholder="Product Name"
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

      <TextArea
        {...register("description", { required: "Description is required" })}
        placeholder="Description"
      />
      {errors.description && (
        <ErrorMessage>{errors.description.message}</ErrorMessage>
      )}

      <Input
        type="number"
        {...register("pricing", { required: "Price is required", min: 0 })}
        placeholder="Price"
      />
      {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}

      <Input {...register("imageUrl")} placeholder="Image URL" />

      <h3>Commission Rates</h3>
      {["Affiliate", "Retailer", "Wholesaler", "Distributor"].map(
        (occupation) => (
          <CommissionInput key={occupation}>
            <label>{occupation}</label>
            <Input
              type="number"
              {...register(`commissionRates.${occupation}`, {
                required: `${occupation} commission rate is required`,
                min: 0,
                max: 100,
              })}
              placeholder={`${occupation} Commission Rate (%)`}
            />
            {errors.commissionRates?.[occupation] && (
              <ErrorMessage>
                {errors.commissionRates[occupation].message}
              </ErrorMessage>
            )}
          </CommissionInput>
        )
      )}

      <ButtonGroup>
        <SaveButton type="submit">Save</SaveButton>
        <CancelButton type="button" onClick={onCancel}>
          Cancel
        </CancelButton>
      </ButtonGroup>
    </Form>
  );
};

export default ProductForm;