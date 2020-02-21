import React, { Component, useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../state/actions";

function Smurfs(props) {
  // const [SmurfChars, setSmurfChars]=useState([])
  console.log(props);
  console.log(props.state);

  // // { fetchSmurfs, smurfs}
  // useEffect(() => {
  //   props.fetchSmurfs();
  // }, []);

  console.log(props);
  console.log(props.smurfs);
  console.log(props.item);

  //  {smurfItems}
  return (
    <div>
      <h2>Smurfs:</h2>

      {/* {props.smurfs.map(smurf => {
        return (
          <div key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h2>{smurf.age}</h2>
            <h2>{smurf.height}</h2>
            <button>Delete Smurf</button>
          </div>
        );
      })} */}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    // what props do we want the component to get?
    smurfs: state.smurfs.smurfs,
    newSmurf: state.smurfs.smurf
  };
}
// Smurfs.propTypes = {
//   fetchSmurfs: PropTypes.func.isRequired,
//   smurfs:PropTypes.array.isRequired,
//   newSmurf: PropTypes.object
// }
// const mapStateToProps = state => ({
//   smurfs: state.smurfs.smurfs,//state.smurfs is reducer.  smurfs(items) is piece of state to go in this property.
// newSmurf: state.smurfs.smurf
// });
// export default connect(mapStateToProps, {fetchSmurfs} )(Smurfs);
export default connect(
  mapStateToProps,
  actions // STEP-9 BRING IN THE ACTION CREATORS
)(Smurfs);
