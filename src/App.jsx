import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/header/weather/WeatherBoard";

// api key: f0bbd31e7c47cf24fed175d28afe4139

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
