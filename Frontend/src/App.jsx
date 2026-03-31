import { useState } from "react";
import "./App.css";
import Home from "./home/Home";
import Course from "./course/Course";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./contact/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import BookReader from "./components/BookReader";

function App() {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);

  return (
    <>
      {/*<Home/>
      <Course/> */}
      <div className=" dark:bg-slate-900 dark:text-white ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Course /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<BookReader />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );

}

export default App;
