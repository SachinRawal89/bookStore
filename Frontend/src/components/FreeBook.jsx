import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "./Cards";
import {useState, useEffect} from "react"
import axios from "axios";

function FreeBook() {
  const [book, setBook] = useState([]);
  // backend se data manga rahe hai
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(
          res.data.filter((data) => {
            return data.category === "Free";
          })
        );
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2"> Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            corporis, id atque, magni hic et dolorem aperiam saepe voluptate
            quam labore mollitia nobis! Saepe reiciendis illo repudiandae ipsam
            harum placeat?
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item) => {
              return <Cards item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
