import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../state/actions";
export function SmurfForm({formValues,  changeInput, onSubmit, onChange}) {

    return (
      <div>

      <h1>Add a Smurf to Smurf Village(form component)</h1>
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
      </div>
    );
  
}
function mapStateToProps(state) {
  return {
    // what props do we want the component to get?
    formValues: state.formValues,
    smurfs: state.smurfs, 
  };
}
export default connect(mapStateToProps, actions)(SmurfForm);

