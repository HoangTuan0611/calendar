import "./App.css";
import "./styles/main.css";
import EventBlock from "./components/eventBlock/EventBlock";
import Calendar from "./components/calendar/Calendar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main__content">
          <EventBlock />
          <Calendar />
        </div>
      </header>
    </div>
  );
}

export default App;
