import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { PopContainer } from "./PopProvider";

function App() {
  return (
    <>

      <div className="App">
        <Header />
          <div className={"fill"}/>
          <div className={"MainBox"}>
              <Outlet />
          </div>

      </div>
    </>
  );
}

export default App;
