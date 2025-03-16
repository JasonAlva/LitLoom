import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <main className="min-h-screen mx-auto max-w-screen-xl px-4 py-6 font-primary">
        <Outlet />
      </main>
      <Footer />
    </AuthProvider>
  );
}

export default App;
