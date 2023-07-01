import "./App.css";
import DressCodeColors from "./components/DressCodeColors/DressCodeColors";
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
      <DressCodeColors />
      <Presents />
      <Contacts />
      <Timeout />
    </div>
  );
}

export default App;
