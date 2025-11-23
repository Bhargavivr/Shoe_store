import { Outlet } from "react-router-dom";
import CardItem from "./components/CardItem";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />

      <Outlet />

      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
