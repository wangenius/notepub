import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className={"main"}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
