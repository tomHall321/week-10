import Squares from "./components/Squares.js";
import SignUp from "./components/SignUp.js";
import Button from "./components/Button.js";
import Form from "./components/Form.js";

function App() {
  return (
    <>
      <Squares colour="hotpink"/>
      <SignUp minimumLength={4}/>
      <Button handleUpdate={ (value) => console.log(value) } />
      <Form handleSubmit={ (value) => console.log(value) } />
    </>
  );
}

export default App;