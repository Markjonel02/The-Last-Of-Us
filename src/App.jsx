import MainComponent from "./components/MainComponent";
import Story from "./components/Story";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <MainComponent>
        <Home />
        <Story />
      </MainComponent>
    </div>
  );
};

export default App;
