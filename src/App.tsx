import { Hero } from "./components/Hero";
import { Modules } from "./components/Modules";
import { Technology } from "./components/Technology";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <div className="bg-mesh"></div>
      <Hero />
      <Modules />
      <Technology />
      <Benefits />
      <Contact />
    </>
  );
}

export default App;
