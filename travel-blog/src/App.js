import headshot from "./images/headshot.jpg";
import heroBackground from "./images/hero-background.jpg";
import "./App.scss";
import Nav from "./components/header";

function App() {
  return (
    <div className="app">
      <Nav imgSrc={heroBackground} />
    </div>
  );
}

export default App;
