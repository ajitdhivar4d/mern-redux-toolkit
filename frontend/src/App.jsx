import Navigation from "./pages/Auth/Navigation";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container">
      <ToastContainer />
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
