import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TelegramButton from "@/components/TelegramButton";
import ProductSection from "@/components/ProductSection";
import CoverBanner from "@/components/CoverBanner";
import Contacts from "@/components/Contacts";
import { categories } from "@/data/products";

export default function Home() {
  return (
    <div id="allrecords" style={{ backgroundColor: "#000" }}>
      <Header />
      <Hero />
      <TelegramButton />
      <div id="scroll-products-point" />
      <ProductSection categories={categories} />
      <CoverBanner />
      <div className="js--contacts-scroll-point" />
      <Contacts />
    </div>
  );
}
