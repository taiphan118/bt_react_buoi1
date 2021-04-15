import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousel />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
