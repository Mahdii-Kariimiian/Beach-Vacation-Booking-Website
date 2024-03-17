import "./App.css";
import TopBar from "./component/TopBar";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Activities from "./component/Activities";
import Booking from "./component/Booking";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
