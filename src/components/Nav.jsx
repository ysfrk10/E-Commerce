import { useState } from "react";
import { useNavigate } from "react-router-dom";
// icons
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function NavBar() {
  const [show, setShowMenu] = useState(false);
  const Navigate = useNavigate();
  function showMenu() {
    setShowMenu(!show);
  }
  return (
    <nav className=" top-0 w-full bg-white/50 mt-0 fixed backdrop-blur-md  border-b dark:bg-gray-900/50 dark:border-b dark:border-gray-700">
      <div className=" max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="../../../public/Y.png"
            className="h-9 bg-[black] rounded-md"
            alt="Flowbite Logo"
          />
          <span className="hidden md:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Store
          </span>
        </a>
        <div>
          <Search />
        </div>
        <div className="flex items-center gap-3">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={showMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            onClick={() => {
              Navigate("cart");
            }}
            className="block md:hidden relative"
          >
            <ShoppingCartOutlinedIcon />
            <span
              className="w-4 h-4 absolute rounded-full 
           bg-[red] dark:bg-[#821719] text-[white] top-[-5px] right-[-5px] flex items-center justify-center"
            >
              1
            </span>
          </div>
        </div>
        <div
          className={
            show
              ? "block w-full md:block md:w-auto"
              : "hidden w-full md:block md:w-auto"
          }
          id="navbar-default"
        >
          <ul className="backdrop-blur-md font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[white]/50 dark:bg-gray-800 md:dark:bg-gray-900/50 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition duration-300  block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition duration-300 block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition duration-300 block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Settings
              </a>
            </li>
            <div
              onClick={() => {
                Navigate("cart");
              }}
              className=" relative transition duration-300  hidden md:block  py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
            >
              <ShoppingCartOutlinedIcon />
              <span
                className="w-4 h-4 absolute rounded-full 
           bg-[red] dark:bg-[#821719] text-[white] top-[-5px] right-[-5px] flex items-center justify-center"
              >
                1
              </span>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Search() {
  return (
    <form className="max-w-md mx-auto">
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-[full] md:w-150 p-4 ps-10 text-sm
           text-gray-900 border border-gray-300 rounded-lg
            bg-gray-50 
            dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white
             outline-none
              "
          placeholder="Search Products..."
        />
      </div>
    </form>
  );
}
