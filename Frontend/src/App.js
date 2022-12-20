import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { ManagementTeam } from "./Pages/ManagementTeam";
import AvialableFlats from "./Pages/AvialableFlats";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CompanyProfile from "./Pages/CompanyProfile";
import Csr from "./Pages/Csr";
import AfterSale from "./Pages/AfterSale";
import OngoingProjects from "./Pages/OngoingProjects";
import UpcomingProjects from "./Pages/UpcomingProjects";
import ReadyProjects from "./Pages/ReadyProjects";
import Apply from "./Pages/Apply";
import SideButton from "./Components/SideButton";
import AvialableFlatsDetails from "./Pages/AvialableFlatsDetails";
import LandOwner from "./Pages/LandOwner";
import Buyer from "./Pages/Buyer";
import ContactUs from "./Pages/ContactUs";
import Admin from "./Dashboard/Admin";

export const App = () => {
  return (
    <>
      <Header />
      <SideButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ManagementTeam" element={<ManagementTeam />} />
        <Route path="/CompanyProfile" element={<CompanyProfile />} />
        <Route path="/Csr" element={<Csr />} />
        <Route path="/AfterSale" element={<AfterSale />} />
        <Route path="/AvialableFlats" element={<AvialableFlats />} />
        <Route
          path="/AvialableFlats/:slug"
          element={<AvialableFlatsDetails />}
        />
        <Route path="/OngoingProjects" element={<OngoingProjects />} />
        <Route path="/UpcomingProjects" element={<UpcomingProjects />} />
        <Route path="/ReadyProjects" element={<ReadyProjects />} />
        <Route path="/LandOwner" element={<LandOwner />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
