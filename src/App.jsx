import NavBar from "./components/Nav";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div>
      <div>
        {/* //////////////////////Nav */}
        <NavBar />
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
