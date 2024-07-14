import { Outlet, useRouteLoaderData } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const loaderData = useRouteLoaderData("app");

  return (
    <>
      <main>
        <div className="wrapper">
          <NavBar data={loaderData} />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
