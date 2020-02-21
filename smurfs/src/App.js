import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import Smurf from "./components/Smurf"
 import SmurfForm from "./components/SmurfForm";
import * as actions from "./state/actions";
import styled from "styled-components";

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
    <StyledApp className="App">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6N9Fe6bOm5AWmq09craEMvH1nlzQOSKSSwRG6a8Y7qIo_7m1N" alt=""/>
      <h1>SMURF VILLAGE</h1>
      <SmurfForm/>
      <h2>Smurfs:</h2>
      {smurfs.map(smurf => (
        <Smurf smurf={smurf}/>
  ))}
      
    </StyledApp>
  );
}
function mapStateToProps(state) {
  return {
    formValues:state.formValues,
    smurfs: state.smurfs
  };
}
export default connect(mapStateToProps, actions)(App);

  // styling
  const StyledApp = styled.div`
  margin: 20px auto;
  width: 60%;
  border: blue 2px solid;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
 
  `