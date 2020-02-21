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

  useEffect(() => {
    fetchSmurfs();
  }, []);

  return (
    <div className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6N9Fe6bOm5AWmq09craEMvH1nlzQOSKSSwRG6a8Y7qIo_7m1N" alt=""/>
      <h1>SMURF VILLAGE</h1>
      <SmurfForm/>
    
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
