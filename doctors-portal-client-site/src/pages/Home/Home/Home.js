import React from "react";
import Navigation from "../../shared/Navigation/Navigation";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import Banner from "../Banner/Banner";
import ExceptionCare from "../ExceptionCare/ExceptionCare";
import Features from "../Features/Features";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Features></Features>
      <Services></Services>
      <ExceptionCare></ExceptionCare>
      <AppoinmentBanner></AppoinmentBanner>
    </div>
  );
};

export default Home;
