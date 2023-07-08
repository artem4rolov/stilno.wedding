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

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

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
