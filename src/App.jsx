import "./App.css";
import { Buttons } from "./components/Buttons/Buttons";
import { PlanContent } from "./components/PlanContent/PlanContent";
import { TopImage } from "./components/TopImage/TopImage";
import { TopText } from "./components/TopText/TopText";

function App() {
  return (
    <>
      <section>
      <TopImage/>
        <div className="content">
          <TopText />
          <PlanContent />
          <Buttons />
        </div>
      </section>
    </>
  );
}

export default App;
