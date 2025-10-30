import NavBar from "./components/Nav";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div>
      {/* //////////////////////Nav */}
      <NavBar />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </div>
  );
}

export default App;
