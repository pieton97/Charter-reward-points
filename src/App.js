import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";


function App() {
  const [rewardPoints, setRewardPoints] = useState();

  return (
    <div className="App">
      <Header />
      <Home 
        rewardPoints={rewardPoints}
        setRewardPoints={setRewardPoints}
      />
      <Footer />
    </div>
  );
}

export default App;
