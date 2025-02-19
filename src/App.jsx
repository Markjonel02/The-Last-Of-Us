import MainComponent from "./components/MainComponent";
import Story from "./components/Story";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Map from "./components/Map";
import Chapters from "./components/Chapters";
const App = () => {
  return (
    <div>
      <Navigation />
      <MainComponent>
        <Home />
        <Story />
        <Map /> <Chapters />
      </MainComponent>
    </div>
  );
};

export default App;
