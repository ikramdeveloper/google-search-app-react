import { Routes as MainRoutes, Route, Navigate } from "react-router-dom";
import { Results } from "../components";

const Routes = () => {
  return (
    <main className="p-4">
      <MainRoutes>
        <Route path="/" element={<Navigate to="/search" />} />
        {["/search", "/news", "/image", "/video"].map((path, index) => (
          <Route path={path} element={<Results />} key={index} />
        ))}
      </MainRoutes>
    </main>
  );
};
export default Routes;
