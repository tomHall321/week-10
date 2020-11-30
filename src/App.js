import Squares from "./components/Squares.js";
import Password from "./components/Password.js";
import SignUp from "./components/SignUp.js";

function App() {
  return (
    <>
      <Squares colour="hotpink"/>
      <SignUp minimumLength={4}/>
    </>
  );
}

export default App;
