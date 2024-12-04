import React from "react";

import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "@components/layouts/Layout";
import { routes } from "routes";
import NotFound from "@components/pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
