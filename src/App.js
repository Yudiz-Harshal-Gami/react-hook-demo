import logo from "./logo.svg";
import "./App.css";
import HookCounter from "./Component/HookCounter";
import HookCounterTwo from "./Component/HookCounterTwo";
import HookStateUpdate from "./Component/HookStateUpdate";
import HookWithArray from "./Component/HookWithArray";
import UseEffectCounter from "./Component/UseEffectCounter";
import HookUseEffect from "./Component/HookUseEffect";
import HookDataFetch from "./Component/HookDataFetch";

function App() {
  return (
    <div className="main-div">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookStateUpdate /> */}
      {/* <HookWithArray/> */}
      {/* <UseEffectCounter /> */}
      {/* <HookUseEffect /> */}
      <HookDataFetch />
    </div>
  );
}

export default App;
