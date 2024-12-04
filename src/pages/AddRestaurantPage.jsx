import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios/axiosConfig";
import { v4 as uuidv4 } from "uuid";
import { Header } from "../components/Header";

export const AddRestaurantPage = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    imageURL: "",
    categoryName: "",
    description: "",
    address: "",
    numberOfLikes: 0,
    numberOfShares: 0,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/Restaurant/Add", formData);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          imageURL: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-8 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Add Restaurant</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="imageURL"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="imageURL"
              name="imageURL"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
            {formData.imageURL && (
              <img
                src={formData.imageURL}
                alt="Selected"
                className="mt-4 w-32 h-32 object-cover rounded-md"
              />
            )}
          </div>
          <div>
            <label
              htmlFor="categoryName"
              className="block text-sm font-medium text-gray-700"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="numberOfLikes"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Likes
            </label>
            <input
              type="number"
              id="numberOfLikes"
              name="numberOfLikes"
              value={formData.numberOfLikes}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="numberOfShares"
              className="block text-sm font-medium text-gray-700"
            >
              Number of Shares
            </label>
            <input
              type="number"
              id="numberOfShares"
              name="numberOfShares"
              value={formData.numberOfShares}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
