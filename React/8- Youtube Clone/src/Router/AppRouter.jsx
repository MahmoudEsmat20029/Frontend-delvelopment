import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Video from "../Pages/Video/Video";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/video/:categoryId/:videoId" element={<Video />} />
    </Routes>
  );
}
