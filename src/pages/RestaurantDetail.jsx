import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRestaurantById } from "../api/restaurants/restaurantsApi";

export const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

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

  console.log(restaurant);

  return (
    <div>
      <div>
        <img
          src={`https://localhost:44359${restaurant?.imageURL}`}
          alt={restaurant?.imageURL}
        />
      </div>
      <div>
        <h1>{restaurant?.name}</h1>
      </div>
    </div>
  );
};
