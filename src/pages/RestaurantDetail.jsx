import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchRestaurantById } from "../api/restaurants/restaurantsApi";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowLeft, FaHeart, FaShareAlt } from "react-icons/fa";
import { Header } from "../components/Header";

export const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const movieData = await fetchRestaurantById(id);
        setRestaurant(movieData);
      } catch (err) {
        console.log(err.message);
      }
    };

    getRestaurant();
  }, [id]);

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-3xl font-semibold mb-10">Restaurant Detail</h1>
        <div className="flex gap-2">
          <button
            className="flex items-start text-2xl mx-4"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </button>
          <div>
            <img
              src={`https://localhost:44359${restaurant?.imageURL}`}
              alt={restaurant?.imageURL}
              className="w-[530px] h-[260px]"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1 text-lg">
              <FaLocationDot />
              <p>{restaurant.address}</p>
            </div>
            <h1 className="text-xl font-bold">{restaurant?.name}</h1>
            <p>
              Kategori:{" "}
              <span className="font-semibold">{restaurant.categoryName}</span>
            </p>
            <p>{restaurant.description}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FaHeart />
                <span>{restaurant.numberOfLikes}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShareAlt />
                <span>{restaurant.numberOfShares}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
