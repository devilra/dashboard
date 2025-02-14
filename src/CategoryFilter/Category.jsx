import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "./redux/CartSlice";
import { FiShoppingCart } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Jacket",
    category: "Clothing",
    price: 50,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENDjhPUcymZVuf0AZ4h40sKkSCMHcruVnVA&s",
  },
  {
    id: 2,
    name: "Laptop",
    category: "Electronics",
    price: 900,
    image:
      "https://images.pexels.com/photos/7974/pexels-photo.jpg?cs=srgb&dl=pexels-life-of-pix-7974.jpg&fm=jpg",
  },
  {
    id: 3,
    name: "Shoes",
    category: "Clothing",
    price: 80,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWHhx2grruFf9Df_W4huYM45-H-mEqry3f_g&s",
  },
  {
    id: 4,
    name: "Washing Machine",
    category: "Home Appliances",
    price: 400,
    image:
      "https://media.istockphoto.com/id/1463361334/photo/washing-machine.jpg?s=612x612&w=0&k=20&c=XZbX6NeoxSvLldqyOFAm5yh0N-b5933E5wzfGRQtq_U=",
  },
  {
    id: 5,
    name: "Smartphone",
    category: "Mobiles",
    price: 700,
    image:
      "https://www.cnet.com/a/img/resize/9bc5f206aad960b4ba5b710de0605bbb29892073/hub/2024/09/13/61e90bfe-868b-4a2d-ae5f-25db8bc086db/iphone-16-plus-iphone-16-4535.jpg?auto=webp&fit=crop&height=900&width=1200",
  },
  {
    id: 6,
    name: "T-Shirt",
    category: "Clothing",
    price: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtVAvzmR9iUVzYZuFn8zQqZBfihgmkff1NQ&s",
  },
  {
    id: 7,
    name: "Headphones",
    category: "Electronics",
    price: 120,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7DMu-7O2189abNd7fPJCirKtnE_NiO93s_g&s",
  },
  {
    id: 8,
    name: "Microwave",
    category: "Home Appliances",
    price: 250,
    image:
      "https://media.istockphoto.com/id/489937746/photo/microwave-stove-isolated.jpg?s=612x612&w=0&k=20&c=vUi8YaHdjDvVHJPXCcYHrWkELl1l8GLpGTg2hUl35V4=",
  },
  {
    id: 9,
    name: "Tablet",
    category: "Mobiles",
    price: 300,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJw119JoCuWoOAO9VYPQ9UACO1OygTmROH4w&s",
  },
  {
    id: 10,
    name: "Sweater",
    category: "Clothing",
    price: 60,
    image: "https://yellowapple.in/cdn/shop/files/IMG-0273.jpg?v=1682585746",
  },
  {
    id: 11,
    name: "Camera",
    category: "Electronics",
    price: 500,
    image:
      "https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg?cs=srgb&dl=pexels-fox-58267-225157.jpg&fm=jpg",
  },
  {
    id: 12,
    name: "Refrigerator",
    category: "Home Appliances",
    price: 800,
    image:
      "https://img.freepik.com/free-vector/refrigerator-closed-opened-door-with-lots-food_1308-92100.jpg?semt=ais_hybrid",
  },
  {
    id: 13,
    name: "Gaming Console",
    category: "Electronics",
    price: 400,
    image:
      "https://i.ytimg.com/vi/fRo8WGED4cw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8cKRHY_Vd5HaxqIA0hymw_njuLA",
  },
  {
    id: 14,
    name: "Smartwatch",
    category: "Mobiles",
    price: 150,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIlCuNJOlIOklHvwNorZOd3s9YWONVDnW6-w&s",
  },
  {
    id: 15,
    name: "Jeans",
    category: "Clothing",
    price: 40,
    image:
      "https://www.realsimple.com/thmb/pylBi8okBliW5e5qvCQFWPQatoc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-denim-GettyImages-598820544-c87ecea4d6454e4a9184a35226c97735.jpg",
  },
];

const placeholders = [
  '  "Jackets..."',
  '  "Laptops..."',
  '  "Shoes..."',
  ' "Mobiles..."',
  '  "Headphones..."',
];

const Category = () => {
  const [categories, setCategories] = useState("");
  const [placeholdersIndex, setPlaceholdersIndex] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  const cart = useSelector((state) => state.cart.items);
  console.log(cart);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPlaceholdersIndex((prev) => (prev + 1) % placeholders.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  const filteredProduct = products
    .filter((product) => (categories ? product.category === categories : true))
    .filter((product) =>
      search ? product.name.toLowerCase().includes(search.toLowerCase()) : true
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  // Reduce function use panni

  // const filteredProducts = products
  //   .reduce((acc, product) => {
  //     if (category && product.category !== category) return acc;
  //     if (
  //       search &&
  //       !product.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //       return acc;
  //     acc.push(product);
  //     return acc;
  //   }, [])
  //   .sort((a, b) =>
  //     sortOrder === "asc" ? a.price - b.price : b.price - a.price
  //   );

  // useMeno use panni filter product

  // const filteredProducts = useMemo(() => {
  //   return products
  //     .filter((product) => !category || product.category === category)
  //     .filter(
  //       (product) =>
  //         !search || product.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //     .sort((a, b) =>
  //       sortOrder === "asc" ? a.price - b.price : b.price - a.price
  //     );
  // }, [products, category, search, sortOrder]);

  /* cartCount evlo nu check panni addcart button or increase/decrease*/

  const getCartItems = (productId) => {
    return cart.find((item) => item.id === productId)?.quantity || 0;
  };

  // cart bucket icon quantity function

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  console.log(totalCartItems);

  return (
    <div className="my-10 flex flex-col md:flex-row relative">
      {/* Sidebar */}
      <div className="border-r h-screen pr-10 pl-2 shadow-lg sticky top-0 bg-white z-10">
        <h1 className="text-lg font-bold mb-2">Categories</h1>
        <ul className="max-h-[80vh] overflow-y-auto">
          {["Clothing", "Electronics", "Mobiles", "Home Appliances"].map(
            (cat) => (
              <li
                onClick={() => setCategories(cat)}
                className={`cursor-pointer py-3 ${
                  categories === cat
                    ? "text-rose-800 font-bold"
                    : "text-neutral-700 font-bold font-mono text-[14px]"
                }`}
                key={cat}
              >
                {cat}
              </li>
            )
          )}
          <li
            onClick={() => setCategories("")}
            className={`cursor-pointer text-neutral-700 py-1 font-bold font-mono text-[14px] ${
              categories === "" && "text-rose-800 font-bold"
            }`}
          >
            All Categories
          </li>
        </ul>
      </div>

      {/* Product List */}
      <div className="w-full md:w-3/4 pl-10 md:ml-1/4 px-3 overflow-y-auto h-screen">
        <h1 className="text-xl font-bold mb-4">Product Filter</h1>
        <div className="absolute -top-10 right-3 ">
          <FiShoppingCart size={20} className="relative" />
          {totalCartItems > 0 && (
            <span className="bg-red-500 text-[10px] font-bold -top-4 -right-6 absolute text-white rounded-full py-1 px-3">
              {totalCartItems}
            </span>
          )}
          <button
            className={` absolute -top-2 right-52 rounded-md  text-[13px] w-[160px] px-5 py-1  ${
              cart.length > 0
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-red-100 text-white cursor-not-allowed"
            }`}
            disabled={cart.length === 0}
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </button>
        </div>
        <div className="mb-4 relative h-10">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search for ${placeholders[placeholdersIndex]}`}
              className="border py-2 outline-none focus:border-slate-800 w-full rounded-md pl-2"
            />
          </motion.div>
        </div>
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="border text-gray-700 text-[14px] tracking-[2px] font-bold w-1/2 p-2 bg-slate-50 rounded-md"
        >
          <option
            value="asc"
            className="text-blue-600 text-[15px] font-bold tracking-[5px]"
          >
            Price (Low to High)
          </option>
          <option value="desc" className="text-neutral-600">
            Price (High to Low)
          </option>
        </select>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {filteredProduct.map((product) => (
            <li key={product.id} className="border p-2 mb-2 text-center">
              <h1 className=" text-[14px] m-3 w-[120px] text-center bg-[#fdfcc7]">
                {product.name}
              </h1>
              <Link to={`/product/${product.id}`} state={{ product }}>
                <img
                  src={product.image}
                  className="h-[150px] border-[3px] rounded-lg border-rose-600"
                  alt={product.name}
                />
              </Link>
              <p className="text-start my-3">${product.price}</p>
              {getCartItems(product.id) === 0 ? (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="bg-blue-500 w-full hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex justify-evenly items-center">
                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
                  >
                    <FaMinus size={10} className="" />
                  </button>
                  <span className="mx-2">{getCartItems(product.id)}</span>
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded"
                  >
                    <FaPlus size={10} />
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
