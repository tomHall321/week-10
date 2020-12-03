import Clicked from "./hooks/Clicked.js";
import Square from "./hooks/Square.js";
import ToggleText from "./hooks/ToggleText.js";
import Counter from "./hooks/Counter.js";

function App() {
  return (
    <>
        <Clicked/>
        <Square/>
        <ToggleText/>
        <Counter initial={ 50 } max={ 100 } />
    </>
  );
}

export default App;