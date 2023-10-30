import React from "react";
import Carousel from "../components/Hompage/Carousel";
import Header from "../components/Navbar/Header";
import TrustContainer from "../components/Hompage/TrustContainer";
import OfferContainer from "../components/Hompage/OfferContainer";
import CollectionsContainer from "../components/Hompage/CollectionsContainer";
import BudgetContainer from "../components/Hompage/BudgetContainer";
import BestSellerContainer from "../components/Hompage/BestSellerContainer";
import ExclusiveContainer from "../components/Hompage/ExclusiveContainer";
import ShopbyCategoryContainer from "../components/Hompage/ShopbyCategoryContainer"
import AdContainer from "../components/Hompage/AdContainer";
import GramContainer from "../components/Hompage/GramContainer";
import YoutubeAd from "../components/Hompage/YoutubeAd";
import NewsContainer from "../components/Hompage/NewsContainer";
import FooterComp from "../components/Footer/FooterComp";

function LandingPage() {
  return (
    <>
      <Header />
      <Carousel />
      <TrustContainer/>
      <OfferContainer/>
      <CollectionsContainer/>
      <BudgetContainer/>
      <BestSellerContainer/>
      <ExclusiveContainer/>
      <ShopbyCategoryContainer/>
      <AdContainer/>
      <GramContainer/>
      <YoutubeAd/>
      <NewsContainer/>
      <FooterComp/>
    </>
  );
}

export default LandingPage;
