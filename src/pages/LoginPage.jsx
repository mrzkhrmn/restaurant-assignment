import { useState } from "react";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../api/auth/authApi";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "admin",
    password: "admin",
  });

  const navigate = useNavigate("/");

  const handleChangeForm = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const login = await fetchLogin(formData);

      const token = login;

      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        console.error("Token not found");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-col h-screen justify-between">
      <form
        onSubmit={handleSubmit}
        className=" border border-gray-400 shadow-xl rounded-md w-96 mx-auto mt-32 "
      >
        <div className="flex items-center flex-col gap-4 p-6">
          <h1 className="text-3xl font-bold text-[#00A79D]">Login</h1>
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => handleChangeForm(e)}
              type="text"
              placeholder="Username..."
              value={formData.username}
              id="username"
              name="username"
              className="border border-black px-2 py-1 w-full rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => handleChangeForm(e)}
              type="password"
              placeholder="Password..."
              value={formData.password}
              id="password"
              name="password"
              className="border border-black px-2 py-1 w-full rounded-md"
            />
          </div>
          <button className="bg-[#00A79D] text-white w-full py-2 rounded-md font-semibold">
            Login
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};
