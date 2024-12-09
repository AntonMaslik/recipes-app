import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MainLayout } from "@components/layouts/MainLayout";
import { routes } from "routes";
import { NotFound } from "@components/pages/NotFoundPage";
import { AuthProvider } from "contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <MainLayout>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
