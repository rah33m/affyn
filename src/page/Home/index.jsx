import { DynamicNFT } from "../../components/DynamicNFt";
import { Faqs } from "../../components/Faq";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./style.css";

export const Home = () => {
  return (
    <div className="page_container">
      <div>
        <Header />
        <main>
          <DynamicNFT />
          <Faqs />
        </main>
        <Footer />
      </div>
    </div>
  );
};
