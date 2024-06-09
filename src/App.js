import "./App.css";
import MainDashboard from "./components/MainDashboard";
import TodayWeather from "./components/TodayWeather";

function App() {
  return (
    <div className="App">
      <TodayWeather />
      <MainDashboard />
    </div>
  );
}

export default App;
