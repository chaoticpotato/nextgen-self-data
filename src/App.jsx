import UsageCharts from "./UsageCharts";
import Hours from "./Hours";
import "./App.css";

function App() {
  return (
    <div className="cont">
      <h1>Self-service early access users - total question 443</h1>
      <Hours />
      <UsageCharts />
    </div>
  );
}

export default App;
