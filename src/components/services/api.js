import axios from "axios";
import Cookies from "js-cookie";
import { dummyCommissionRates, dummyAnnouncements, dummyUsers } from "./data";

const API_URL = "http://localhost:22000";

const getToken = () => {
  return Cookies.get("admin-token");
};

// Fetch Products
export const fetchProducts = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${API_URL}/api/v1/products/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.courseDetails;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Add Product
export const addProduct = async (product) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${API_URL}/api/v1/products/addproduct`,
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

// Update Product
export const updateProduct = async (id, updatedProduct) => {
  try {
    const token = getToken();
    const response = await axios.post(
      `${API_URL}/api/v1/products/updateCourses/${id}`,
      updatedProduct,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.message;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Delete Product
export const deleteProduct = async (id) => {
  try {
    const token = getToken();
    await axios.delete(`${API_URL}/api/v1/products/deleteCourse/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return "Product deleted successfully";
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const fetchCommissionRates = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyCommissionRates), 500);
  });
};

export const updateCommissionRate = async (occupation, rate) => {
  return new Promise((resolve) => {
    dummyCommissionRates[occupation] = rate;
    setTimeout(() => resolve({ [occupation]: rate }), 500);
  });
};

export const fetchAnnouncements = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyAnnouncements), 500);
  });
};

export const createAnnouncement = async (announcement) => {
  return new Promise((resolve) => {
    const newAnnouncement = {
      ...announcement,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    };
    dummyAnnouncements.push(newAnnouncement);
    setTimeout(() => resolve(newAnnouncement), 500);
  });
};

export const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyUsers), 500);
  });
};

// import {
//   dummyProducts,
//   dummyCommissionRates,
//   dummyAnnouncements,
//   dummyUsers
// } from "./data";

// export const fetchProducts = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(dummyProducts), 500);
//   });
// };

// export const addProduct = async (product) => {
//   return new Promise((resolve) => {
//     const newProduct = { ...product, id: Date.now() };
//     dummyProducts.push(newProduct);
//     setTimeout(() => resolve(newProduct), 500);
//   });
// };

// export const updateProduct = async (id, updatedProduct) => {
//   return new Promise((resolve) => {
//     const index = dummyProducts.findIndex((p) => p.id === id);
//     if (index !== -1) {
//       dummyProducts[index] = { ...dummyProducts[index], ...updatedProduct };
//       setTimeout(() => resolve(dummyProducts[index]), 500);
//     } else {
//       setTimeout(() => resolve(null), 500);
//     }
//   });
// };

// export const deleteProduct = async (id) => {
//   return new Promise((resolve) => {
//     const index = dummyProducts.findIndex((p) => p.id === id);
//     if (index !== -1) {
//       dummyProducts.splice(index, 1);
//     }
//     setTimeout(() => resolve(), 500);
//   });
// };

// export const fetchCommissionRates = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(dummyCommissionRates), 500);
//   });
// };

// export const updateCommissionRate = async (occupation, rate) => {
//   return new Promise((resolve) => {
//     dummyCommissionRates[occupation] = rate;
//     setTimeout(() => resolve({ [occupation]: rate }), 500);
//   });
// };

// export const fetchAnnouncements = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(dummyAnnouncements), 500);
//   });
// };

// export const createAnnouncement = async (announcement) => {
//   return new Promise((resolve) => {
//     const newAnnouncement = {
//       ...announcement,
//       id: Date.now(),
//       date: new Date().toISOString().split("T")[0],
//     };
//     dummyAnnouncements.push(newAnnouncement);
//     setTimeout(() => resolve(newAnnouncement), 500);
//   });
// };

// export const fetchUsers = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(dummyUsers), 500);
//   });
// };
