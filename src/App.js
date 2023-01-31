import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App"></div>
        <Routes>
          <Route exact path="/">
            <News key='general' pageSize={15} country="in" category="general" />
          </Route>
          <Route exact path="/business">
            <News key='business' pageSize={15} country="in" category="business" />
          </Route>
          <Route exact path="/entertainment">
            <News key='entertainment' pageSize={15} country="in" category="entertainment" />
          </Route>
          <Route exact path="/general">
            <News key='general' pageSize={15} country="in" category="general" />
          </Route>
          <Route exact path="/health">
            <News key='health' pageSize={15} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News key='science' pageSize={15} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News key='sports' pageSize={15} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News key='technology' pageSize={15} country="in" category="technology" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
