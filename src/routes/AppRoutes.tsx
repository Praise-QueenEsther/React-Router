import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import BrowserRouterPage from "../pages/BrowserRouterPage";
import HashRouterPage from "../pages/HashRouterPage";
import MemoryRouterPage from "../pages/MemoryRouterPage";
import ComparisonPage from "../pages/ComparisonPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browser-router/*" element={<BrowserRouterPage />} />
      <Route path="/hash-router/*" element={<HashRouterPage />} />
      {/* <Route path="*" element={<MemoryRouterPage />} /> */}
      <Route path="/memory-router/*" element={<MemoryRouterPage />} />

      <Route path="/comparison" element={<ComparisonPage />} />
    </Routes>
  );
};

export default AppRoutes;
