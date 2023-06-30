import "./App.css";
import {
  Main,
  InfoBlock,
  Program,
  Location,
  DressCode,
  Presents,
  Contacts,
  Timeout,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Main />
      <InfoBlock />
      <Program />
      <Location />
      <DressCode />
      <Presents />
      <Contacts />
      <Timeout />
    </div>
  );
}

export default App;
