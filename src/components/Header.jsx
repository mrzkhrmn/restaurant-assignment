import { MdHome } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoFolderOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

export const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate("/login");
    } else {
      console.error("No token");
    }
  };
  return (
    <header className=" max-w-7xl mx-auto flex items-center justify-between py-4">
      <div className="flex flex-col justify-center items-center text line">
        <h3 className="text-lg text-red-500 font-bold">Türkiye</h3>
        <h3 className="text-xl text-[#00A79D] font-bold">Fun & Save</h3>
      </div>
      <nav className="bg-[#00A79D] flex items-center text-3xl text-white pl-2 pr-10 py-1 rounded-xl gap-3 relative">
        <Link>
          <MdHome />
        </Link>
        <Link>
          <IoFolderOutline size={24} />
        </Link>
        <Link>
          <FaHeart size={24} />
        </Link>
        <Link>
          <GoSearch size={24} />
        </Link>{" "}
        <button onClick={handleLogout}>
          <IoIosLogOut />
        </button>
        <Link className="p-1 w-14 h-14 absolute left-[12.5rem] bg-[#00A79D] shadow-xl flex items-center justify-center rounded-full border border-dashed">
          <FaUser />
        </Link>
      </nav>
    </header>
  );
};
