import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/nft" element={<h1>NFT</h1>} />
        <Route path="/crypto" element={<h1>Crypto</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
