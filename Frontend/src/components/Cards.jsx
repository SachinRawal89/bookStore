import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  //console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-sm hover:scale-105 duration-200">
          {/* <figure className="h-40 overflow-hidden">
            {<img
              src={item.image}
              alt="Books"
              className="w-full h-full object-cover"
            /> }
          </figure> */}
          <figure className="h-40 overflow-hidden cursor-pointer">
            <Link to={`/book/${item._id}`}>
              <img
                src={item.image}
                alt="Book Cover"
                className="w-full h-full object-cover hover:scale-110 duration-300"
              />
            </Link>
          </figure>
          <div className="card-body">
            <h2 className="card-name flex items-center gap-2">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
