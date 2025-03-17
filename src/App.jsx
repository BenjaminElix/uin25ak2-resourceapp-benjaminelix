import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./assets/components/Layout";
import Resources from "./assets/components/Resources";
import PageTitle from "./assets/components/PageTitle";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Standardrute som gjør til /html */}
        <Route path="/" element={<Navigate to="/html" replace />} />
        <Route
          path="/html"
          element={
            <Resources category="html">
              <PageTitle />
            </Resources>
          }
        />
        <Route
          path="/css"
          element={
            <Resources category="css">
              <PageTitle />
            </Resources>
          }
        />
        <Route
          path="/javascript"
          element={
            <Resources category="javascript">
              <PageTitle />
            </Resources>
          }
        />
        <Route
          path="/react"
          element={
            <Resources category="react">
              <PageTitle />
            </Resources>
          }
        />
        <Route
          path="/sanity"
          element={
            <Resources category="headless-cms">
              <PageTitle />
            </Resources>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
