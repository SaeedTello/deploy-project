import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {
  Home,
  AboutUs,
  LebanonClients,
  ContactUs,
  Services,
  ServiceDetail,
  Events,
  News,
  NewsDetail,
} from "./Pages/Index";
import { Header, NavBar, Footer } from "./Sections/Index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/deploy-project/" element={<Home />} />
          <Route path="/deploy-project/about" element={<AboutUs />} />
          <Route path="/deploy-project/clients" element={<LebanonClients />} />
          <Route path="/deploy-project/services" element={<Services />} />
          <Route path="/deploy-project/services/:id" element={<ServiceDetail />} />
          <Route path="/deploy-project/events" element={<Events />} />
          <Route path="/deploy-project/news" element={<News />} />
          <Route path="/deploy-project/news/:id" element={<NewsDetail />} />
          <Route path="/deploy-project/contacts" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}