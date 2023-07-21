import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import { Button } from "components/Button";


const Hifi = React.lazy(() => import("pages/Hifi"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Hifi />} />
           <Route path="/button" element={<Button/>} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
