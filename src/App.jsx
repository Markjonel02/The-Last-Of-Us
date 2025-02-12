import MainComponent from "./components/MainComponent";

import Home from "./components/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <MainComponent>
        <Home />
      </MainComponent>
    </div>
  );
};

export default App;
