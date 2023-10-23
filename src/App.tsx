import { useState } from "react";
import { trendingData, popularData } from "./data.js";
import Trends from "./components/Trends.js";
import "./styles/App.scss";

const App: React.FC = () => {
  const [showTrends, setShowTrends] = useState(false);
  return (
    <div className="main">
      <div
        className="container"
        tabIndex={0}
        onFocus={() => {
          setShowTrends(true);
        }}
      >
        <input className="search" type="text" placeholder="Search" />
        {showTrends && (
          <Trends trendingData={trendingData} popularData={popularData} />
        )}
      </div>
    </div>
  );
};

export default App;
