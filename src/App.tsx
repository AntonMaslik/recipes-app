import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "@components/layouts/MainLayout";
import { routes } from "routes";
import NotFound from "@components/pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </MainLayout>
    </div>
  );
}

export default App;
