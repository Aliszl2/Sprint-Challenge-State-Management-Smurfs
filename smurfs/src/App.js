import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import Smurf from "./components/Smurf"
 import SmurfForm from "./components/SmurfForm";
import * as actions from "./state/actions";

function App({
  formValues,
  changeInput,
  fetchSmurfs,
  smurfs,
  postSmurf
}) {
  const onChange = event => {
    changeInput({
      inputName: event.target.name,
      inputValue: event.target.value
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    postSmurf({
      name: formValues.name,
      age: formValues.age,
      height: formValues.height
    });
  };
  useEffect(() => {
    fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6N9Fe6bOm5AWmq09craEMvH1nlzQOSKSSwRG6a8Y7qIo_7m1N" alt=""/>
      <h1>SMURF VILLAGE</h1>
      <SmurfForm/>
      <h1>Add a Smurf to Smurf Village(app.js)</h1>
        <form 
        onSubmit={onSubmit}
        >
          <div>
            <label htmlFor="">Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={formValues.name}
       onChange={onChange}
            /><br/>

            <label htmlFor="">Age:</label>
            <br />
            
            <input
              type="number"
              name="age"
              value={formValues.age}
              onChange={onChange}
         
            />
          </div>
          <div>
            <label htmlFor="">height:</label>
            <br />
            <input
              name="height"
              value={formValues.height}
              onChange={onChange}
          
            ></input>
            <br />
            <button type="submit">Submit Smurf</button>
          </div>
        </form>
      <h2>Smurfs:</h2>

      {smurfs.map(smurf => (
        <Smurf smurf={smurf}/>
  ))}
      
    </div>
  );
}
function mapStateToProps(state) {
  return {
    formValues:state.formValues,
    smurfs: state.smurfs
  };
}
export default connect(mapStateToProps, actions)(App);
