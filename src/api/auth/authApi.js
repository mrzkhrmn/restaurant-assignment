import axiosInstance from "../axios/axiosConfig";
export const fetchLogin = async ({ username, password }) => {
  try {
    const response = await axiosInstance.post("/Authentication", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
