import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import { MainLayout } from "@components/layouts/MainLayout";
import { routes } from "routes";
import { NotFound } from "@components/pages/NotFoundPage";
import { AuthProvider } from "contexts/AuthContext";
import { apolloClient } from "@apollo-custom/apollo-client";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <Router>
          <div className="App">
            <MainLayout>
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                  />
                ))}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          </div>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
