import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
export default function CartPage() {
  const Navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto p-4 md:mt-30 mt-20 "
    >
      <div className="flex gap-1 items-center ">
        <button
          onClick={() => {
            Navigate("/");
          }}
          type="button"
          class="text-whitefont-medium  text-center inline-flex items-center me-2   "
        >
          <svg
            class="w-6 h-6 transition duration-300 hover:text-blue-800 text-gray-800 dark:text-white dark:hover:text-blue-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
      </div>
      {/* products */}
      <div
        className="md:mx-auto  md:max-w-[80%] transition duration-300 mt-4 block max-w-sm p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm 
       dark:bg-gray-800 dark:border-gray-700 "
      >
        {/* product card */}
        <div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Items (2)
          </h1>
          <div className="flex gap-3 ">
            <img
              className="md:w-[150px] w-[30%] h-[30%]"
              src="../../public/aluminum-laptop-stand.jpg"
              alt=""
            />
            <div className="w-[50%] md:mt-0 -mt-2.5 md:flex md:flex-col md:justify-evenly">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Product Name
              </h3>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                Price
              </p>
              {/* on click */}
              <div className="flex items-center gap-2">
                <button
                  className="font-semibold border cursor-pointer
            inline-flex justify-center items-center py-[4px] px-[4px] text-[15px] border-[black]/50 dark:border-[white]/50"
                >
                  <RemoveIcon />
                </button>
                <span className="text-[20px] mx-4">1</span>
                <button
                  className="font-semibold border cursor-pointer 
            inline-flex justify-center items-center py-[4px] px-[4px] text-[15px] border-[black]/50 dark:border-[white]/50"
                >
                  <AddIcon />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-around items-end gap-2">
              <DeleteOutlinedIcon
                sx={{
                  transition: "300ms",
                }}
                className=" hover:text-[red] "
              />
              <h4 className="md:ml-60 md:mt-12 mt-10 font-bold text-[20px]">
                1,233
              </h4>
            </div>
          </div>
        </div>
        {/* product card */}
        <div className="mt-4">
          <div className="flex gap-3 ">
            <img
              className="md:w-[150px] w-[30%] h-[30%]"
              src="../../public/aluminum-laptop-stand.jpg"
              alt=""
            />
            <div className="w-[50%] md:mt-0 -mt-2.5 md:flex md:flex-col md:justify-evenly">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Product Name
              </h3>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                Price
              </p>
              {/* on click */}
              <div className="flex items-center gap-2">
                <button
                  className="font-semibold border cursor-pointer
            inline-flex justify-center items-center py-[4px] px-[4px] text-[15px] border-[black]/50 dark:border-[white]/50"
                >
                  <RemoveIcon />
                </button>
                <span className="text-[20px] mx-4">1</span>
                <button
                  className="font-semibold border cursor-pointer 
            inline-flex justify-center items-center py-[4px] px-[4px] text-[15px] border-[black]/50 dark:border-[white]/50"
                >
                  <AddIcon />
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-around items-end gap-2">
              <DeleteOutlinedIcon
                sx={{
                  transition: "300ms",
                }}
                className=" hover:text-[red] "
              />
              <h4 className="md:ml-60 md:mt-12 mt-10 font-bold text-[20px]">
                1,233
              </h4>
            </div>
          </div>
        </div>
        <button
          className="md:mx-auto md:max-w-[80%] font-semibold cursor-pointer text-[20px] w-full transition duration-300 mt-4 block max-w-sm p-2 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100
       dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          Clear Cart
        </button>
      </div>
      {/* checkout */}

      <div
        className="md:mx-auto  md:max-w-[80%] transition duration-300 mt-4 block max-w-sm p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm 
       dark:bg-gray-800 dark:border-gray-700 "
      >
        <h2 className=" text-xl font-bold  text-gray-900 dark:text-white">
          Order Summary
        </h2>
        <div className="mt-4 flex justify-between items-center ">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Subtotal
          </p>
          <h3 className=" font-bold text-[20px]">$1,233</h3>
        </div>
        <div className="my-4 flex justify-between items-center ">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Shipping
          </p>
          <h3 className=" font-bold text-[20px]">Free</h3>
        </div>
        <div className="mb-4 flex justify-between items-center ">
          <p className="font-normal text-gray-700 dark:text-gray-400">Tax</p>
          <h3 className=" font-bold text-[20px]">$233</h3>
        </div>
        <hr />
        <div className="mt-4 flex justify-between items-center ">
          <h3 className=" font-bold text-[20px]">Total</h3>
          <h3 className=" font-bold text-[20px]">$233</h3>
        </div>
        <div>
          <button
            className="md:mx-auto md:max-w-[80%] font-semibold cursor-pointer text-[20px] w-full transition duration-300 mt-4 block max-w-sm p-2 dark:bg-gray-50 border dark:border-gray-200 rounded-lg shadow-sm dark:hover:bg-gray-200
       bg-gray-800 border-gray-700 hover:bg-gray-700 dark:text-gray-800 text-gray-50 "
          >
            Processed to Checkout
          </button>
          <button
            onClick={() => {
              Navigate("/");
            }}
            className="md:mx-auto md:max-w-[80%] font-semibold cursor-pointer text-[20px] w-full transition duration-300 mt-4 block max-w-sm p-2 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100
       dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            continue Shopping
          </button>
        </div>
      </div>
    </motion.div>
  );
}
