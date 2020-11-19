import headshot from "./images/headshot.jpg";
import heroBackground from "./images/hero-background.jpg";
import "./App.scss";
import Nav from "./components/nav";
import Header from "./components/header";
import Site from "./components/site";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header imgSrc={heroBackground} />
      <Site imgSrc={headshot} />
    </div>
  );
}

export default App;
