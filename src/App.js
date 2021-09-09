import "./App.css";
import ArrayComponent from "./useArray/ArrayComponent";
import PreviousComponent from "./usePrevious/PreviousComponent";
import TimeoutComponent from "./useTimeout/TimeoutComponent";
import ToggleComponent from "./useToggle/ToggleComponent";
import UpdateEffectComponent from "./useUpdateEffect/UpdateEffectComponent";

function App() {
  return (
    <div className="App">
      <ToggleComponent />
      <TimeoutComponent />
      <UpdateEffectComponent />
      <ArrayComponent />
      <PreviousComponent />
    </div>
  );
}

export default App;
