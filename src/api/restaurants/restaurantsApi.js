import axiosInstance from "../axios/axiosConfig";
export const fetchRestaurants = async () => {
  try {
    const response = await axiosInstance.get("/Restaurant/GetAll");
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const fetchRestaurantById = async (id) => {
  try {
    const response = await axiosInstance.get(`/Restaurant/GetDetail?id=${id}`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const fetchAddRestaurant = async () => {
  try {
    const response = await axiosInstance.get(`/Restaurant/Add`);
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
