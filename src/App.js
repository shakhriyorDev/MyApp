import React from "react";
import routesConfig from "./routes/routes.config";
import { Route, Routes } from "react-router-dom";
import Header from "./components/General/Header";
import Footer from "./components/General/Footer";
// import Header from "./components/General/Header";
// import Showcase from "./components/General/Showcase";
// import Work from "./components/General/Work";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />}>
            {" "}
          </Route>
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
