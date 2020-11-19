import headshot from "./images/headshot.jpg";
import heroBackground from "./images/hero-background.jpg";
import "./App.scss";
import Nav from "./components/nav";
import Header from "./components/header";
import Site from "./components/site";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header imgSrc={heroBackground} />
      <Site imgSrc={headshot} />
      <Footer />
    </div>
  );
}

export default App;
