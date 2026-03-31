import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Courses() {
  //console.log(list);
  console.log("Courses component rendered");
  const [book, setBook] = useState([]);
  // backend se data manga rahe hai
  useEffect( ()=> {
    const getBook = async() => {
      try {
       const res = await axios.get("http://localhost:4001/book")
      //  console.log(res.data);
       setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, [])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you
            <span className="text-pink-500"> Here! :) </span>
          </h1>
          <p className="mt-11">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            reiciendis, veritatis, quod voluptatum explicabo esse suscipit
            provident dolor eum assumenda aperiam, modi fuga laborum dicta
            veniam consectetur est harum. Aperiam!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-11 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {book.map((item) => {
            return <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Courses;
