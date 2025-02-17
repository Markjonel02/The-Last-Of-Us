import MainComponent from "./components/MainComponent";
import Story from "./components/Story";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Map from "./components/Map";
const App = () => {
  return (
    <div>
      <Navigation />
      <MainComponent>
        <Home />
        <Story />
        <Map />
      </MainComponent>
    </div>
  );
};

export default App;
