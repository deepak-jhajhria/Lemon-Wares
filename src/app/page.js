"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import About from "@/pages/About";
import Account from "@/pages/Account";
import Blogs from "@/pages/Blogs";
import Contact from "@/pages/Contact";
import Index from "@/pages/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
