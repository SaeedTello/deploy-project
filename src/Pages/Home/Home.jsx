import "./Home.css";
import {
  About,
  CEO,
  ContactUs,
  Details,
  HomeTitle,
  LatestNews,
  Portfolio,
  Services,
} from "../../Sections/Index";

export default function Home() {
  return (
    <>
      <div className="home-page">
        <HomeTitle />
        <Details />
        <About />
        <Services />
        <Portfolio />
        <CEO />
        <LatestNews />
        <ContactUs />
      </div>
    </>
  );
}
