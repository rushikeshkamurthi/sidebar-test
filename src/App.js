import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { RouteContext } from "./context/RouteContext";
import Login from "./pages/User/Login";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import "./App.css";
import Breadcrumb from "./components/Breadcrumb";
import RouteConfig from "./RouteConfig";

const App = () => {
  return (
    <Router>
      <RouteContext.Provider value={{ routes: RouteConfig }}>
        <Layout>
          <div className="main-content">
            <div className="bread-crumb">
              {" "}
              <Breadcrumb />{" "}
            </div>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
            <Route index element={<Login />} />
              {RouteConfig.map((route, index) => (
                <Route path={route.path} key={index} element={route.element}>
                  {route.subRoutes &&
                    route.subRoutes.map((route, idx) => {
                      return (
                        <Route
                          path={route.path}
                          key={idx}
                          element={route.element}
                        ></Route>
                      );
                    })}
                </Route>
              ))}

              {/* <Route path="/login" element={<Login />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/projects/*" element={<Projects />} />
              <Route path="/*" element={<NotFound />} /> */}
            </Routes>
            </Suspense>
          </div>
        </Layout>
      </RouteContext.Provider>
    </Router>
  );
};

export default App;
