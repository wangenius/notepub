import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export const App = () => (
  <div className="App">
    <Header />
    <div className={"main"}>
      <Outlet />
    </div>
  </div>
);

export default App;
