import { Route, Routes } from "react-router-dom";
import './App.css';
import Searchpost from "./Searchpost";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Searchpost />}>
          {/* <Route path="details/:id" element={<Details />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
