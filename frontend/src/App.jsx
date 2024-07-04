import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import PopBlogs from "./Components/PopBlogs";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <PopBlogs />
    </>
  );
}

export default App;
