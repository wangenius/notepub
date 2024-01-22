import { Header } from "./Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={"main"}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
