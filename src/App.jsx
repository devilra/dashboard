import React from "react";
import EventRegistration from "./EventRegistration";
import { Link, Route, Routes } from "react-router-dom";
import Analytics from "./Analytics";
import Home from "./Home";
import Category from "./CategoryFilter/Category";
import ProductDetails from "./CategoryFilter/ProductDetails";

const App = () => {
  const fruits = new Set();
  fruits.add("Apple");
  fruits.add("Lemon");
  fruits.add("Mango");
  fruits.add("Banana");
  fruits.add("Banana");

  // console.log(fruits.has("Juice"));
  // console.log(fruits);

  // const newSet = new Set();

  // function addNumber(num) {
  //   if (!newSet.has(num)) {
  //     newSet.add(num);
  //     console.log(`${num} added`);
  //     return;
  //   } else {
  //     console.log(`${num} already exists`);
  //   }
  // }

  // addNumber(10);
  // addNumber(30);
  // addNumber(30);

  // console.log(newSet);

  // const userManage = new Set();

  // const defaultData = ["raja", "raja", "suresh", "mahesh"];

  // function addUser() {
  //   for (let user of defaultData) {
  //     userManage.add(user);
  //   }
  //   console.log(userManage);
  // }

  // addUser();

  return (
    <div className="m-5">
      <Link
        className="px-10 py-2 bg-lime-200 my-10 rounded-md hover:bg-lime-300 text-lime-900 font-bold trackking-[2px]"
        to="/"
      >
        Home
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventRegistration />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/category" element={<Category />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
