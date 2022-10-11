import React from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import CalenderValidator from "./CalenderValidator";
import Home from "./Home";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/calculator" exact element={<Calculator />}></Route>
        <Route path="/calender" exact element={<CalenderValidator />}></Route>
      </Routes>
    </div>
  );
};

export default Body;
