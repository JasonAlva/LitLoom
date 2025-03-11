import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen mx-auto max-w-screen-xl px-4 py-6 font-primary">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
