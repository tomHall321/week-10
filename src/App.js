import Clicked from "./hooks/Clicked.js";
import Square from "./hooks/Square.js";
import ToggleText from "./hooks/ToggleText.js";
import Counter from "./hooks/Counter.js";
import StepCounter from "./hooks/StepCounter.js";
import RollCall from "./hooks/RollCall.js";
import PasswordStrength from "./hooks/PasswordStrength.js";
import TempConverter from "./hooks/TempConverter.js";
import List from "./hooks/List.js";
import Colours from "./hooks/Colours.js";
import Die from "./hooks/Die.js";

function App() {
  return (
    <>
        <Clicked/>
        <Square/>
        <ToggleText/>
        <Counter initial={ 50 } max={ 100 } />
        <StepCounter max={ 100 } step={ 5 } />
        <RollCall names={ ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }/>
        <PasswordStrength/>
        <TempConverter/>
        <List/>
        <Colours colours={ colours }></Colours>
        <Die sides={ 6 }></Die>
    </>
  );
}
let colours = [
  "#C14412",
  "#EBB31A",
  "#8F5318",
  "#009EAD",
  "#395967",
];
export default App;