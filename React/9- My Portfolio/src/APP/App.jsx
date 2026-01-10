import "./App.css";
import { useTheme } from "../Contexts/ThemeContext";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Contacts from "../Components/Contacts/Contacts";
import Footer from "../Components/Footer/Footer";
import AboutDialog from "../Components/AboutDialog/AboutDialog";

function App() {
  const { mode } = useTheme();

  return (
    <div className="app" data-theme={mode}>
      <Navbar />
      <AboutDialog />
      <div style={{ overflowX: "hidden" }}>
        <Home />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
