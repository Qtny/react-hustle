import { Route, Routes } from "react-router-dom";
import "./App.css";
import RootPage from "./pages/RootPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <RootPage /> } />
      </Routes>
    </div>
  );
}

export default App;
