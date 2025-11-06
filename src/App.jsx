import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AppRouter } from "./router/AppRouter";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton"; // ⬅️ IMPORTACIÓN AGREGADA
import "./i18n";
import BanderaProyecto from "./components/BanderaProyecto";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AppRouter />
      <Footer />
      <BanderaProyecto /> 
      
      <WhatsAppButton /> 
    </>
  );
}
