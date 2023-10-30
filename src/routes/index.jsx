import { Routes, Route, Navigate } from "react-router-dom";
import UserRoutes from "./users/UserRoutes";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<UserRoutes />} />
    </Routes>
  );
}
