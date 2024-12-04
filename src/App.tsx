import React from "react";

import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "@components/layouts/layout";
import { routes } from "routes";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
