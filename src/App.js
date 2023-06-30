import "./App.css";
import {
  Main,
  InfoBlock,
  Program,
  Location,
  DressCode,
  Gallery,
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
      <Gallery />
      <DressCode />
      <Presents />
      {/* <Contacts /> */}
      {/* <Timeout /> */}
    </div>
  );
}

export default App;
